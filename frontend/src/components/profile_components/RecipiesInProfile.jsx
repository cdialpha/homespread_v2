import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaEdit } from "react-icons/fa";
import api from "../../api/index";
import { useAuth } from "../../utils/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
  const auth = useAuth();
  const userId = auth.user.user._id;
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error } = useQuery(
    ["all-users-recipies", userId],
    () => api.getAllOneUsersRecipies(userId)
  );

  return (
    <>
      <HeaderText>My Recipies</HeaderText>
      <div style={ModalWrapperStyles}>
        <EditProfileButton data-modal="modal-two">
          <FaEdit />
          Add Recipie
        </EditProfileButton>
      </div>
      {isLoading ? <h2>Loading...</h2> : null}
      {isError ? <h2>Error...</h2> : null}
      {data ? <h2>Data to be displayed</h2> : null}
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
