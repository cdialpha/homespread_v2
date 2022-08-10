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

const SideNavForBasic = () => {
  return (
    <SideNavContainer>
      <SideNavGroup>
        <SideNavGroupTitle> PUBLIC PROFILE </SideNavGroupTitle>
        <SideNavGroupElement>
          <Link to="bio">EDIT PROFILE </Link>
        </SideNavGroupElement>
        <SideNavGroupElement>
          <Link to="settings">SETTINGS </Link>
        </SideNavGroupElement>
      </SideNavGroup>
      <SideNavGroupElement>
        <Link to="basicorders"> ORDER HISTORY </Link>
      </SideNavGroupElement>
      <SideNavGroupElement>
        <Link to="reviews"> REVIEWS </Link>
      </SideNavGroupElement>
    </SideNavContainer>
  );
};

export default SideNavForBasic;
