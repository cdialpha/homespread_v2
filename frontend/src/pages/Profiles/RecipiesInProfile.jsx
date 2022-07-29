import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AddRecipieModal from "./AddRecipieModal";
import { FaEdit } from "react-icons/fa";

const ModalWrapperStyles = {
  position: "relative",
  zIndex: 1,
};

const HeaderText = styled.h1`
  ${tw`
font-weight[900]
font-size[50px]
`}
`;

const RecipiesContainer = styled.div`
  ${tw`
  height[200px]
  border-2
  border-gray-300
  margin[20px]
`}
`;

const RecipiePhoto = styled.img`
  ${tw`
    height[200px]
    width[200px] 
`}
`;

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

const RecipiesInProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    console.log("click!", isOpen);
  };

  return (
    <>
      <HeaderText>My Recipies</HeaderText>
      <div style={ModalWrapperStyles}>
        <EditProfileButton onClick={openModal}>
          <FaEdit />
          Add Recipie
        </EditProfileButton>
        <AddRecipieModal open={isOpen} onClose={() => setIsOpen(false)}>
          Some text
        </AddRecipieModal>
      </div>
      <RecipiesContainer>
        <RecipiePhoto />
      </RecipiesContainer>
      <RecipiesContainer>
        <RecipiePhoto />
      </RecipiesContainer>
      <RecipiesContainer>
        <RecipiePhoto />
      </RecipiesContainer>
    </>
  );
};

export default RecipiesInProfile;
