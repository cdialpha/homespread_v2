import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive.js";
import dimsum from "../../images/dimsum.png";
import tacos from "../../images/tacos.png";
import samosas from "../../images/samosa.png";
import goat from "../../images/goat.png";
import hummus from "../../images/hummus.png";
import south from "../../images/south.png";

const View = styled.div`
  ${tw`
mt-5
  bg-black
width[100%]
ml-auto
mr-auto
`}
`;

const FeatureHeader = styled.div`
  ${tw`
  text-white
  ml-5
font-size[35px]
font-family['Dancing Script']
font-weight[900]
`}
`;

const GridContainer = styled.div`
  ${tw`

mt-2
ml-auto
mr-auto
pl-10
pr-10
mb-10

grid
grid-cols-2
grid-rows-2
md:grid-rows-1
lg:grid-cols-4
xl:grid-cols-5
2xl:grid-cols-6
column-gap[2%]
row-gap[20px]
max-width[2000px]
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

  border-2
  border-gray-500
  border-radius[15px]
  align-self[center]
  hover:transform[scale(1.05)]
`}
`;

const GridText = styled.div`
  ${tw`
    text-white
    height[30px]
    align-self[center]
    font-size[25px]
    font-weight[800]

`}
`;

const Trending = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isDesktop = useMediaQuery({ minWidth: deviceSize.desktop });
  const isWidescreen = useMediaQuery({ minWidth: deviceSize.widescreen });

  return (
    <View>
      <FeatureHeader> Currently Trending </FeatureHeader>
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
        {isDesktop ? (
          <GridItem>
            <GridImages src={hummus}></GridImages>
            <GridText>Medditeranian</GridText>
          </GridItem>
        ) : null}
        {isWidescreen ? (
          <GridItem>
            <GridImages src={south}></GridImages>
            <GridText>American South</GridText>
          </GridItem>
        ) : null}
      </GridContainer>
    </View>
  );
};

export default Trending;
