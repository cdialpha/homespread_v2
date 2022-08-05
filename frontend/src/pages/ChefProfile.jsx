import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import emptyProfile from "../images/anon.png";
import { FaEdit } from "react-icons/fa";
import profileHero from "../images/hero-profile2.png";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../utils/auth";

const RootContainer = styled.div`
  ${tw`
    bg-gray-200
`}
`;

const PageViewContainer = styled.div`
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

const SideNav = styled.button`
  ${tw`
min-width[200px]
width[400px]
max-width[400px]
pr-2
`}
`;

const SideNavGroup = styled.div`
  ${tw`
    bg-white  
    text-gray-800
    border-2
    border-gray-100
    border-radius[10px]
    min-width[210px]
    mt-2
    mb-2
    `}
`;

const SideNavGroupTitle = styled.div`
  ${tw`
  width[inherit]  
  pt-1
  pb-3
  text-gray-400
  font-weight[900]
`};
`;

const SideNavGroupElement = styled.div`
  ${tw`
  flex
  width[inherit]
  pt-1
  pl-5
  pb-1  
  text-gray-600
  hover:bg-gray-100
  border-b-2
  border-b-gray-100
  

  `};
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

const ModalWrapperStyles = {
  position: "relative",
  zIndex: 1,
};

const ChefProfile = () => {
  const auth = useAuth();
  const user = auth.user.user.username;
  const [isChefOpen, setIsChefOpen] = useState(false);
  const openChefModal = () => {
    setIsChefOpen(true);
    console.log("click!", isChefOpen);
  };

  return (
    <>
      <RootContainer>
        <PageViewContainer>
          <ProfileHeader>
            <ProfilePic src={emptyProfile} alt="profile pic" />
            <div>
              <ProfileName>{user}</ProfileName>

              <div style={ModalWrapperStyles}>
                <EditProfileButton
                  onClick={openChefModal}
                  data-modal="modal-one"
                >
                  <FaEdit />
                  Edit Profile
                </EditProfileButton>
              </div>
            </div>
          </ProfileHeader>
          <ContentContainer>
            <SideNav>
              <SideNavGroup>
                <SideNavGroupTitle> PROFILE </SideNavGroupTitle>
                <SideNavGroupElement>
                  <Link to="bio">BIO & IDENTITY</Link>
                </SideNavGroupElement>
                <SideNavGroupElement> SOCIAL MEDIA </SideNavGroupElement>
                <SideNavGroupElement> YOUR PHOTOS </SideNavGroupElement>
              </SideNavGroup>
              <SideNavGroup>
                <SideNavGroupTitle> ACTIVITY </SideNavGroupTitle>
                <SideNavGroupElement>
                  <Link to="reviews"> REVIEWS</Link>
                </SideNavGroupElement>
                <SideNavGroupElement>
                  <Link to="photos"> PHOTOS </Link>
                </SideNavGroupElement>
                <SideNavGroupElement>
                  <Link to="followers"> FOLLOWERS </Link>
                </SideNavGroupElement>
              </SideNavGroup>

              <SideNavGroup>
                <SideNavGroupTitle> MANAGE ORDERS </SideNavGroupTitle>
                <SideNavGroupElement> CURRENT ORDERS </SideNavGroupElement>
                <SideNavGroupElement> ORDER HISTORY </SideNavGroupElement>
                <SideNavGroupElement> ANALYTICS </SideNavGroupElement>
              </SideNavGroup>
              <SideNavGroup>
                <SideNavGroupTitle> MANAGE OFFERINGS </SideNavGroupTitle>
                <SideNavGroupElement>
                  <Link to="recipies"> RECIPIES </Link>
                </SideNavGroupElement>
                <SideNavGroupElement> CATERING </SideNavGroupElement>
                <SideNavGroupElement> AVAILABILITY </SideNavGroupElement>
                <SideNavGroupElement> PICK UP </SideNavGroupElement>
              </SideNavGroup>
            </SideNav>
            <ContentArea>
              Some content goes here
              <Outlet />
            </ContentArea>
          </ContentContainer>
        </PageViewContainer>
      </RootContainer>
    </>
  );
};

export default ChefProfile;
