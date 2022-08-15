import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import emptyProfile from "../images/anon.png";
import profileHero from "../images/hero-profile2.png";
import { Outlet } from "react-router-dom";
import { useAuth } from "../utils/auth";
import SideNavForChef from "../components/profile_components/SideNavforChef";
import SideNavForBasic from "../components/profile_components/SideNavforBasic";

const ProfileContainer = styled.div`
  ${tw`
  flex
  flex-col
  justify-center
  ml-auto
  mr-auto
  bg-gray-200
  max-width[1375px]
`}
`;

const ProfileHeader = styled.div`
  ${tw`
    flex
    height[325px]
    min-width[400px]
    mt-10
    
    align-items[center]
  `};
  background-image: url(${profileHero});
  background-size: cover;
`;

const ProfileName = styled.div`
  ${tw` 
    font-weight[900]
    text-white
    text-2xl
    xl:text-6xl
    2xl:text-8xl
`}
`;

const ProfilePic = styled.img`
  ${tw`
    height[200px]
    width[250px] 
`}
`;

const ContentContainer = styled.div`
  ${tw`
    flex
    align-top 
`}
`;
const ContentArea = styled.div`
  ${tw`
  flex  
  flex-col
  width[1500px]
    height[100%]
    bg-gray-50
    justify-center
    text-center
`}
`;

const Profile = () => {
  const auth = useAuth();
  const username = auth.user.user.username;
  const role = auth.user.user.role;

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfilePic src={emptyProfile} alt="profile pic" />
        <ProfileName>{username}</ProfileName>
      </ProfileHeader>
      <ContentContainer>
        {role === "basic" ? <SideNavForBasic /> : <SideNavForChef />}
        <ContentArea>
          <Outlet />
        </ContentArea>
      </ContentContainer>
    </ProfileContainer>
  );
};

export default Profile;
