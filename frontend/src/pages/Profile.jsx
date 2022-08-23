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
    text-3xl
    md:text-6xl
    2xl:text-8xl
`}
`;

const ProfilePic = styled.img`
  ${tw`
    height[200px]
    width[200px]
    margin[10px 10px 10px 10px] 
`}
`;

const ContentContainer = styled.div`
  ${tw`
    flex
    align-items[flex-start]
    
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
  const username = auth.user?.user?.username || null;
  const role = auth.user?.user?.role;
  console.log(auth.user?.user?.profile_pic);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfilePic
          src={auth.user.user?.profile_pic || emptyProfile}
          alt="profile pic"
        />
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
