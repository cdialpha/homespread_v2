import React from "react";
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";
import { useAuth } from "../../utils/auth";

const View = styled.div`
  ${tw`
height[1000px]
flex
flex-col
align-items[flex-start]
ml-10
`}
`;
const EditProfileButton = styled.button`
  ${tw`
    flex
    justify-around
    pl-2
    pr-2
    mt-2
    align-items[center]
    text-white
    bg-red-300
    width[130px]
    height[35px]
    border-radius[10px]
    hover:bg-red-400
`}
`;
const Container = styled.div`
  ${tw`
flex
flex-col
pl-10
pt-5
`}
`;
const Field = styled.div`
  ${tw`
  text-align[start]
  font-weight[900]
  width[200px]
text-2xl
mr-5
mt-2
`}
`;
const Value = styled.div`
  ${tw`
text-2xl
text-align[start]

width[80%]
`}
`;
const BioElement = styled.div`
  ${tw`
flex
align-items[center]
border-b-2

`}
`;
const Header = styled.div`
  ${tw`
  font-weight[900]
  mt-10
  
  text-4xl

`}
`;

const Bio = () => {
  const auth = useAuth();
  const user = auth.user?.user;
  console.log(user);
  return (
    <View>
      <Header>About You:</Header>
      <EditProfileButton data-modal="modal-one">
        <FaEdit />
        Edit Bio
      </EditProfileButton>
      <Container>
        <BioElement>
          <Field> Username: </Field>
          <Value>{user?.username}</Value>
        </BioElement>
        <BioElement>
          <Field> Email: </Field>
          <Value>{user?.email}</Value>
        </BioElement>
        <BioElement>
          <Field> Phone Number: </Field>
          <Value>{user?.phone_number || "n/a"}</Value>
        </BioElement>

        <BioElement>
          <Field> Identify As: </Field>
          <Value>{user?.identify || "n/a"}</Value>
        </BioElement>
        <BioElement>
          <Field> Tags: </Field>
          <Value>{user?.cuisine_tags || "n/a"}</Value>
        </BioElement>
        <BioElement>
          <Field> Member Since: </Field>
          <Value>{user?.createdAt || "n/a"}</Value>
        </BioElement>
        <BioElement>
          <Field> About Me: </Field>
          <Value>{user?.bio || "n/a"}</Value>
        </BioElement>
      </Container>
    </View>
  );
};

export default Bio;

// {
//   name: {
//     first: String,
//     middle: String,
//     last: String,
//   },
//   username: reqString,
//   role: {
//     type: String,
//     enum: ["basic", "chef"],
//     default: "basic",
//   },
//   hash: String,
//   salt: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   profile_pic: String,
//   bio: String,
//   rating: Number,
//   cuisine_tags: [String],
//   identify: [String],
//   pickup_location: {
//     address: String,
//     city: String,
//     state: String,
//     zip: String,
//   },
//   offerings: [mongoose.SchemaTypes.ObjectId],
//   reviews: [ReviewSchema],
//   catering: false,
// },
// { collection: "users" }
