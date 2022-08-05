import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaEdit } from "react-icons/fa";
import api from "../../api/index";
import { useAuth } from "../../utils/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Recipie from "./Recipie";

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

  const { isLoading, data } = useQuery(["all-users-recipies", userId], () =>
    api.getAllOneUsersRecipies(userId)
  );
  console.log(data);

  return (
    <>
      <HeaderText>My Recipies</HeaderText>
      <div style={ModalWrapperStyles}>
        <EditProfileButton data-modal="modal-two">
          <FaEdit />
          Add Recipie
        </EditProfileButton>

        {isLoading ? <h2>Loading...</h2> : null}
        {data?.map((recipie) => (
          <Recipie key={recipie._id} recipie={recipie} />
        ))}
      </div>
    </>
  );
};

export default RecipiesInProfile;
