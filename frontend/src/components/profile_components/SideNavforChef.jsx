import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const SideNavContainer = styled.button`
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

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavGroup>
        <SideNavGroupTitle> PROFILE </SideNavGroupTitle>
        <SideNavGroupElement>
          <Link to="bio">BIO & IDENTITY</Link>
        </SideNavGroupElement>

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
    </SideNavContainer>
  );
};

export default SideNav;
