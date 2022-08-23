import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import "../../styles/registerStyles.css";
import emptyProfile from "../../images/anon.png";
import profileHero from "../../images/hero-profile2.png";
import { BsCameraFill as Camera } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import FormikControl from "../formik_components/FormikControl";
import ModalShell from "../../ModalShell";
import api from "../../api/api";
import FileUpload from "./FileUpload";
import { useAuth } from "../../utils/auth";

const ModalMask = styled.div`
  ${tw`
  fixed
  top[0px]
  bottom[0px]
  left[0px]
  right[0px]
  z-10
  bg-opacity-50
  bg-black
  `}
`;
const ModalBody = styled.div`
  ${tw`
    flex
    flex-col
    position[fixed]
    width[400px]
    height[750px]
    border-radius[10px]
    md:width[600px]
    md:height[900px]
    top[55%]
    left[50%]
    md:top[50%]
    transform[translate(-50%, -50%)]
    bg-white
    zIndex[1000]
    `}
`;
const formikStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
const Header = styled.div`
  ${tw`
    flex
    justify-between
    align-items[center]
    padding[10px 20px 5px 10px]
    md:padding[20px 20px 5px 20px]
`}
`;
const ModalTitle = styled.h1`
  ${tw`
font-weight[900]
text-xl
md:text-3xl
`}
`;
const Button = styled(FaWindowClose)`
  ${tw` 
    font-size[30px]
    text-red-900
    hover:transform[scale(1.1)]
`}
`;
const Hero = styled.div`
  ${tw`
flex
height[125px]
md:height[200px]
width[100%]
align-items[center]
mb-5
`};
  background-image: url(${profileHero});
  background-size: cover;
`;
const ProfilePic = styled.img`
  ${tw`
    height[100px]
    width[125px]
    md:height[200px]
    md:width[250px]
    top[50%] 
`}
`;
const EditPhoto = styled(Camera)`
  ${tw`
  text-gray-400
  position[absolute]
  height[50px]
  width[50px]  
  border-radius[20px]
  padding[5px]
  cursor-pointer
`}
  &:hover {
    transform: scale(0.9);
  }
  background-color: rgba(0, 0, 0, 0.6);
`;
const SubmitButton = styled.button`
  ${tw`
    width[200px]
    border-2
    border-red-700
    bg-red-50
    text-red-700
    ml-2
    mr-2
    border-radius[10px]
    hover:bg-red-100
    hover:border-red-900
    hover:text-red-900
    `}
`;
const SubmitDiv = styled.div`
  ${tw`
flex
mt-0
lg:mt-5
justify-center
`}
`;
const ProfileField = styled.div`
  ${tw`
absolute
top[8%]
left[2%]
md:top[7%]
md:left[15%]
`}
`;

const EditChefModal = ({ closeFn = () => null, open = false }) => {
  let auth = useAuth();
  let user = auth.user?.user;
  const userId = user?._id;
  const profilePic = user?.profile_pic;

  const initialValues = {
    username: user?.username,
    phone: user?.phone || "",
    email: user?.email,
    password: "***********",
    bio: user?.bio,
    tags: user?.tags || "",
    identify: user?.identify,
  };

  const dropdownOptions = [
    { key: "Select an option", value: "x" },
    { key: "Woman Owned", value: "woman" },
    { key: "Black Owned", value: "black" },
    { key: "Immigrant Owned", value: "immigrant" },
    { key: "Other", value: "other" },
  ];

  const [images, setImageValues] = useState([]);

  const displayThumbnail = images.length ? images[0].data_url : profilePic;

  const onSubmit = async (values) => {
    closeFn();
    console.log("submitting form...");
    const { profile_pic, username, phone, email, bio, tags, identify } = values;

    const profileUpdates = {
      username,
      phone,
      email,
      bio,
      cuisine_tags: tags,
      identify,
    };

    // only post photo to s3 bucket if images has been changed.
    if (images[0]) {
      const S3SignedUrl = await api.getS3Url();
      const profilePicUrl = S3SignedUrl.split("?")[0];
      profileUpdates.profile_pic = profilePicUrl;
      user.profile_pic = profilePic;
      api.postPhoto(S3SignedUrl, images[0]);
    }

    api.updateProfile(userId, profileUpdates);

    // update user object
    user.username = username;
    user.phone_number = phone;
    user.email = email;
    user.bio = bio;
    user.cuisine_tags = tags;
    user.identify = identify;
    auth.setUser(user);

    // // Update info in local Storage, so that role persists after login
    let userFromLocalStorage = localStorage.getItem("userInfo");
    userFromLocalStorage = JSON.parse(userFromLocalStorage);
    userFromLocalStorage.user = user;
    userFromLocalStorage = JSON.stringify(userFromLocalStorage);
    localStorage.setItem("userInfo", userFromLocalStorage);
  };

  return (
    <ModalShell open={open}>
      <ModalMask>
        <ModalBody>
          <Header>
            <ModalTitle> Edit Profile </ModalTitle>
            <Button type="button" onClick={closeFn}></Button>
          </Header>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formik) => {
              // console.log('formik props:', formik);
              return (
                <Form style={formikStyle}>
                  <Hero>
                    <div>
                      <ProfileField>
                        <Field
                          id="profilePic"
                          name="profilePic"
                          setImageValues={setImageValues}
                          uploaderType={"profile"}
                          component={FileUpload}
                        />
                      </ProfileField>
                      <ProfilePic src={displayThumbnail} />
                    </div>
                    <EditPhoto style={{ top: "10%", right: "2%" }} />
                  </Hero>
                  <FormikControl
                    control="input"
                    label="Username"
                    name="username"
                    palceholder="username"
                  />
                  <FormikControl
                    control="input"
                    label="Phone"
                    name="phone"
                    palceholder="(555)-555-5555"
                  />
                  <FormikControl
                    control="input"
                    label="Email"
                    name="email"
                    palceholder="example@gmail.com"
                  />
                  <FormikControl
                    control="input"
                    label="Password"
                    name="password"
                    palceholder="*********"
                  />
                  <FormikControl
                    control="textarea"
                    label="Bio"
                    name="bio"
                    palceholder="some text placeholder"
                  />
                  <FormikControl
                    control="input"
                    label="Cuisine Tags"
                    name="tags"
                    palceholder="*********"
                  />
                  <FormikControl
                    control="select"
                    label="I identify as: "
                    name="identify"
                    options={dropdownOptions}
                  />

                  <SubmitDiv>
                    <SubmitButton onClick={closeFn}>Cancel</SubmitButton>
                    <SubmitButton type="submit">Submit</SubmitButton>
                  </SubmitDiv>
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </ModalMask>
    </ModalShell>
  );
};

export default EditChefModal;
