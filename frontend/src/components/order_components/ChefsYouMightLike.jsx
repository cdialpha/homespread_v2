import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/api";
import ChefCard from "./ChefCard";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive.js";

const View = styled.div`
  ${tw`
mt-10
  bg-black
width[100%]
ml-auto
mr-auto
`}
`;

const FeatureHeader = styled.div`
  ${tw`
  text-center
  text-white
font-size[35px]
font-family['Dancing Script']
font-weight[900]
mb-5
`}
`;
const Container = styled.div`
  ${tw`
flex
height[100%]
ml-10
mr-10
`}
`;
const GridContainer = styled.div`
  ${tw`
mt-2
ml-auto
mr-auto
pl-0
pr-0
md:pl-10
md:pr-10
mb-10
grid
grid-cols-2
grid-rows-2
md:grid-cols-4
column-gap[0%]
md:column-gap[10%]
row-gap[20px]

  `};
  grid-template-rows: 350px;
`;

const Arrow = styled.div`
  ${tw`
  height[100px]
  font-size[100px]
  text-white
  align-self[center]
`}
`;

const ChefsYouMightLike = () => {
  const isDesktop = useMediaQuery({ minWidth: deviceSize.desktop });

  const { data } = useQuery(["get-chefs"], () => api.getChefs(), {
    keepPreviousData: true,
  });

  return (
    <View>
      <FeatureHeader> Chefs you might like... </FeatureHeader>
      <Container>
        {isDesktop ? (
          <Arrow>
            <FaAngleLeft />
          </Arrow>
        ) : null}
        <GridContainer>
          {data
            ? data.chefs.map((chef) => (
                <ChefCard key={chef._id} chefDetails={chef} />
              ))
            : null}
        </GridContainer>
        {isDesktop ? (
          <Arrow>
            <FaAngleRight />
          </Arrow>
        ) : null}
      </Container>
    </View>
  );
};

export default ChefsYouMightLike;
