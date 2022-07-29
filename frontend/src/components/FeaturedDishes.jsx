import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./responsive";

const FeatureHeader = styled.div`
  ${tw`
font-weight[900]
`}
`;

const GridContainer = styled.div`
  ${tw`
bg-gray-100
mt-10
ml-5
mr-5
mb-10
grid
grid-cols-2
grid-rows-2
md:grid-cols-3
md:grid-rows-2
lg:grid-cols-6
lg:grid-rows-1
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
    min-height[150px]
    width[100%]

    xl:height[250px]
    xl:width[250px]
    border-2
    border-gray-500

`}
`;
const GridText = styled.div`
  ${tw`
    bg-gray-200
    height[50px]
`}
`;

const FeaturedDishes = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <div>
      <FeatureHeader> Featured Dishes </FeatureHeader>
      <GridContainer>
        <GridItem>
          <GridImages></GridImages>
          <GridText>Item 1</GridText>
        </GridItem>
        <GridItem>
          <GridImages></GridImages>
          <GridText>Item 2</GridText>
        </GridItem>
        <GridItem>
          <GridImages></GridImages>
          <GridText>Item 3</GridText>
        </GridItem>
        <GridItem>
          <GridImages></GridImages>
          <GridText>Item 4</GridText>
        </GridItem>
        {isMobile ? null : (
          <>
            <GridItem>
              <GridImages></GridImages>
              <GridText>Item 5</GridText>
            </GridItem>
            <GridItem>
              <GridImages></GridImages>
              <GridText>Item 6</GridText>
            </GridItem>
          </>
        )}
      </GridContainer>
    </div>
  );
};

export default FeaturedDishes;
