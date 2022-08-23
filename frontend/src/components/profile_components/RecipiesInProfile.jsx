import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaEdit } from "react-icons/fa";
import api from "../../api/api";
import { useAuth } from "../../utils/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Recipie from "./Recipie";
import emptyPlate from "../../images/emptyplate.png";

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
const EditButton = styled.button`
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
const NoRecipies = styled.div`
  ${tw`
flex
flex-col
font-size[30px]
`}
`;
const EmptyPlate = styled.img`
  ${tw`
  width[300px]
  ml-auto
  mr-auto
  opacity-50
  `}
`;

const RecipiesInProfile = () => {
  const auth = useAuth();
  const userId = auth.user.user._id;
  console.log(userId);

  const { isLoading, data } = useQuery(["all-users-recipies", userId], () =>
    api.getAllOneUsersRecipies(userId)
  );
  console.log(data);

  const deleteRecipie = (recipieId) => {
    const deletedRecipie = api.deleteRecipie(recipieId);
    console.log(deletedRecipie);
  };

  return (
    <>
      <HeaderText>My Recipies</HeaderText>
      <div style={ModalWrapperStyles}>
        <EditButton data-modal="modal-two">
          <FaEdit />
          Add Recipie
        </EditButton>

        {isLoading ? <h2>Loading...</h2> : null}

        {!data ? (
          <NoRecipies>
            <h2> You have no recipies to show</h2>
            <EmptyPlate src={emptyPlate} />
            <h2> Add a recipie to get started </h2>
          </NoRecipies>
        ) : (
          data.map((recipie) => (
            <Recipie
              key={recipie._id}
              recipie={recipie}
              deleteRecipie={deleteRecipie}
            />
          ))
        )}
      </div>
    </>
  );
};

export default RecipiesInProfile;
