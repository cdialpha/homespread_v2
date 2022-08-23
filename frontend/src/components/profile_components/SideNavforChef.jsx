import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { useAuth } from "../../utils/auth";

const SideNavContainer = styled.button`
  ${tw`
min-width[200px]
width[400px]
max-width[400px]
padding[5px 5px 5px 5px]
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
  margin[5px 5px 5px 5px]
  shadow-lg
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
text-gray-800
hover:bg-gray-100
border-t-2
border-b-gray-100
`};
`;

const SideNav = () => {
  const user = useAuth.user;
  return (
    <SideNavContainer>
      <SideNavGroup>
        <SideNavGroupTitle> PROFILE & ACTIVITY </SideNavGroupTitle>
        <SideNavGroupElement>
          <Link style={{ textDecoration: "none" }} to="bio">
            BIO & IDENTITY
          </Link>
        </SideNavGroupElement>
        <SideNavGroupElement>
          <Link to="photos"> YOUR PHOTOS </Link>
        </SideNavGroupElement>
        <SideNavGroupElement>
          <Link to="reviews"> REVIEWS</Link>
        </SideNavGroupElement>
        <SideNavGroupElement>
          <Link to="followers"> FOLLOWERS </Link>
        </SideNavGroupElement>
      </SideNavGroup>

      <SideNavGroup>
        <SideNavGroupTitle> MANAGE ORDERS </SideNavGroupTitle>
        <SideNavGroupElement>
          <Link to="current-orders"> CURRENT ORDERS </Link>
        </SideNavGroupElement>
        <SideNavGroupElement>
          <Link to="order-history"> ORDER HISTORY </Link>
        </SideNavGroupElement>
        <SideNavGroupElement>
          <Link to="analytics"> ANALYTICS </Link>
        </SideNavGroupElement>
      </SideNavGroup>
      <SideNavGroup>
        <SideNavGroupTitle> MANAGE OFFERINGS </SideNavGroupTitle>
        <SideNavGroupElement>
          <Link to="recipies"> RECIPIES </Link>
        </SideNavGroupElement>
        <SideNavGroupElement>
          <Link to="catering"> CATERING </Link>
        </SideNavGroupElement>
        <SideNavGroupElement>
          <Link to="availability"> AVAILABILITY </Link>
        </SideNavGroupElement>
      </SideNavGroup>
      <SideNavGroup>
        <SideNavGroupTitle> OTHER </SideNavGroupTitle>
        <SideNavGroupElement>
          <Link to="settings"> SETTINGS </Link>
        </SideNavGroupElement>
      </SideNavGroup>
    </SideNavContainer>
  );
};

export default SideNav;
