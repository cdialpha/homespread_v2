import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive.js";
import dimsum from "../../images/dimsum.png";
import tacos from "../../images/tacos.png";
import samosas from "../../images/samosas.png";
import goat from "../../images/goat.png";

const FeatureHeader = styled.div`
  ${tw`
font-size[35px]
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
  border-radius[15px]
  align-self[center]
  hover:transform[scale(1.05)]

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

const LeadInFilter = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const randomNumber = (numberOfRandomValues) => {
    return;
  };
  return (
    <div>
      <FeatureHeader> Discover Cuisines </FeatureHeader>
      <GridContainer>
        <GridItem>
          <GridImages src={tacos}></GridImages>
          <GridText>Hispanic</GridText>
        </GridItem>
        <GridItem>
          <GridImages src={dimsum}></GridImages>
          <GridText>Souteast Asian</GridText>
        </GridItem>
        <GridItem>
          <GridImages src={samosas}></GridImages>
          <GridText>South Asian</GridText>
        </GridItem>
        <GridItem>
          <GridImages src={goat}></GridImages>
          <GridText>African</GridText>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default LeadInFilter;
