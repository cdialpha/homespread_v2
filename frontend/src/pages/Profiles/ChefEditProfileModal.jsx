import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import tw from "twin.macro";
import "../../styles/registerStyles.css";
import emptyProfile from "../../images/anon.png";
import profileHero from "../../images/hero-profile2.png";
import { BsCameraFill as Camera } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";

const MODAL_OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: 1000,
};

const Modal = styled.div`
  ${tw`
    flex
    flex-col
    position[fixed]
    width[400px]
    height[750px]
    border-radius[10px]
    md:width[600px]
    md:height[900px]
  `}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1000;
`;

const formikStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const FormTitle = styled.div`
  ${tw`
    text-3xl
    ml-auto
    mr-auto
`};
`;

const Header = styled.div`
  ${tw`
    flex
    justify-between
    align-items[center]
    padding[20px]
`}
`;

const ModalTitle = styled.h1`
  ${tw`
font-weight[900]
text-3xl
`}
`;

const Button = styled(FaWindowClose)`
  ${tw` 
    hover:to-red-600
`}
`;

const Hero = styled.div`
  ${tw`
flex
height[200px]
lg:height[300px]
width[100%]
align-items[center]
`};
  background-image: url(${profileHero});
  background-size: cover;
`;

const ProfilePic = styled.img`
  ${tw`
    height[200px]
    width[250px]
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
mt-5
lg:mt-10
justify-center
`}
`;

const initialValues = {
  username: "",
  phone: "",
  email: "",
  password: "",
  description: "",
};

const ChefEditProfileModal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <div style={MODAL_OVERLAY_STYLES}>
      <Modal>
        <Header>
          <ModalTitle> Edit Profile </ModalTitle>
          <Button onClick={onClose}></Button>
        </Header>
        <Hero>
          <div>
            <ProfilePic src={emptyProfile} />
            <EditPhoto style={{ top: "15%", left: "30%" }} />
          </div>
          <EditPhoto style={{ top: "10%", right: "2%" }} />
        </Hero>

        <Formik initialValues={initialValues}>
          {(formik) => {
            // console.log('formik props:', formik);
            return (
              <Form style={formikStyle}>
                <div className="form-group">
                  <Field
                    className="form-control"
                    placeholder="User Name"
                    type="text"
                    id="username"
                    name="username"
                  />
                  <label htmlFor="username" className="form-label">
                    Full Name
                  </label>
                </div>

                <div className="form-group">
                  <Field
                    className="form-control"
                    type="text"
                    placeholder="Phone number"
                    id="phone"
                    name="phone"
                  />
                  <label htmlFor="phone" className="form-label">
                    Phone number
                  </label>
                </div>

                <div className="form-group">
                  <Field
                    className="form-control"
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    name="email"
                  />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </div>

                <div className="form-group">
                  <Field
                    className="form-control"
                    type="password"
                    placeholder="****"
                    id="password"
                    name="password"
                  />
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                </div>

                <div className="form-group">
                  <Field
                    className="form-control"
                    type="text"
                    placeholder="Description"
                    id="Description"
                    name="Description"
                  />
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                </div>
                <SubmitDiv>
                  <SubmitButton>Cancel</SubmitButton>
                  <SubmitButton>Submit</SubmitButton>
                </SubmitDiv>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>,
    document.getElementById("portal")
  );
};

export default ChefEditProfileModal;

// validationSchema={validationSchema}
// onSubmit={handleSubmit}
// validateOnMount
