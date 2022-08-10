import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";

const ModalWrapperStyles = {
  position: "relative",
  zIndex: 1,
};

const EditProfileButton = styled.button`
  ${tw`
    flex
    justify-around
    pl-2
    pr-2
    lg:ml-5
    align-items[center]
    text-white
    bg-red-400
    width[175px]
    height[35px]
    border-radius[10px]
`}
`;

const Bio = () => {
  const [isChefOpen, setIsChefOpen] = useState(false);
  const openChefModal = () => {
    setIsChefOpen(true);
    console.log("click!", isChefOpen);
  };

  return (
    <div>
      <div style={ModalWrapperStyles}>
        <EditProfileButton onClick={openChefModal} data-modal="modal-one">
          <FaEdit />
          Edit Profile
        </EditProfileButton>
      </div>

      <div> First Name: </div>
      <div> Middle Name: </div>
      <div> Last Name: </div>
      <div> Username: </div>

      <div> About me: </div>
      <div> Member Since: </div>
    </div>
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
