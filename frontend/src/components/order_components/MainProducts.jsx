import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { FaSlidersH } from "react-icons/fa";

const FeatureHeader = styled.div`
  ${tw`
  font-size[30px]
  font-family['Dancing Script']
  font-weight[900]
  `}
`;

const GridContainer = styled.div`
  ${tw`
  bg-gray-100
  mt-2
  ml-auto
  mr-auto
  mb-10
  grid
  grid-cols-2
  grid-rows-2
  md:grid-cols-4
  md:grid-rows-1
  column-gap[10px]
  row-gap[20px]
    `};
`;

const GridItem = styled.div`
  ${tw`
      flex
      flex-col
      ml-auto
      mr-auto
      width[100%]
      height[100%]
      border-gray-400
      border-2
  
  `}
`;

const GridImages = styled.img`
  ${tw`
    height[200px]
    width[200px]     
    xl:height[250px]
    xl:width[250px]
    border-2
    border-gray-500
  
  `}
`;
const GridText = styled.div`
  ${tw`
      bg-gray-200
      height[30px]
      align-self[center]
      font-size[25px]
      font-weight[800]
  
  `}
`;

const SortBy = styled.button`
  ${tw`
bg-gray-100
flex 
width[115px]
border-radius[10px]
border-2
border-black
justify-around
padding[1px 5px 1px 5px]
align-items[center]
hover:transform[scale(1.01)]

`}
`;

const MainProducts = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const randomNumber = (numberOfRandomValues) => {
    return;
  };
  return (
    <div>
      <FeatureHeader> What are you eating tonight? </FeatureHeader>
      <SortBy>
        {" "}
        <FaSlidersH /> All Filters
      </SortBy>
      <GridContainer>
        <GridItem>
          <GridImages></GridImages>
          <GridText>Hispanic</GridText>
        </GridItem>
        <GridItem>
          <GridImages></GridImages>
          <GridText>Souteast Asian</GridText>
        </GridItem>
        <GridItem>
          <GridImages></GridImages>
          <GridText>South Asian</GridText>
        </GridItem>
        <GridItem>
          <GridImages></GridImages>
          <GridText>African</GridText>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default MainProducts;
