import React from "react";
import foodie from "../../images/foodie.png";
import chef from "../../images/chef.png";
import styled from "styled-components";
import tw from "twin.macro";
import chopping from "../../images/about_background.jpg";

const SectionContainer = styled.div`
  ${tw`
  pt-5
h-auto
  `};
  background-image: url(${chopping});
  background-color: #ffffffaa;
  background-size: cover;
  background-blend-mode: overlay;
`;

const SectionTitle = styled.div`
  ${tw`
  font-size[50px]
  md:font-size[80px] 
  lg:font-size[120px]
  mb-5
  text-center
  font-family['Dancing Script']
`};
`;

const GridContainer = styled.div`
  ${tw`
grid
grid-cols-1 
grid-rows-4
md:grid-cols-2
md:grid-rows-2
grid-template-columns[1fr]
md:grid-template-columns[auto auto]
grid-template-rows[auto auto]
row-gap[20px]
column-gap[20px]
max-width[1200px]
ml-auto
mr-auto
mb-10
`}
`;

const FoodieImg = styled.img`
  ${tw`
  grid-row[1]
  grid-column[1]
  place-self-center

  max-width[400px]
  md:grid-column[1]
  md:grid-row[1]
`}
`;

const ChefImg = styled.img`
  ${tw`
  w-auto
  place-self-center
  grid-row[3]
  grid-column[1]
  max-width[400px]
  md:grid-column[2]
  md:grid-row[2]
`}
`;

const FoodieDesc = styled.div`
  ${tw`
  ml-10
  mr-10
  grid-row[2]
  grid-column[1]
  md:grid-column[2]
  md:grid-row[1]
  place-self-center
`}
`;

const ChefDesc = styled.div`
  ${tw`
  ml-10
  mr-10
  grid-row[4]
  grid-column[1]
  md:grid-column[1]
  md:grid-row[2]
  place-self-center
  `}
`;

const Title = styled.h1`
  ${tw`
  font-size[30px]
  lg:font-size[50px] 
  font-family['Dancing Script']
  border-b-2
  border-gray-300

`};
`;

const DescText = styled.h2`
  ${tw`
    2xl:font-size[25px]
    xl:font-size[20px] 
    lg:font-size[20px]
    md:font-size[20px]
    sm:font-size[20px]
`};
`;

const FindMore = styled.a`
  ${tw`
    pt-5  
    font-weight[900]
    2xl:font-size[25px]
    xl:font-size[20px] 
    lg:font-size[20px]
    md:font-size[20px]
    sm:font-size[20px]
    color[#1d1a1a]
    hover:color[#fbb830]
`}
`;

const AboutSum = () => {
  return (
    <SectionContainer>
      <SectionTitle> Connecting Boston </SectionTitle>
      <GridContainer>
        <FoodieDesc>
          <Title> The Adventurous Palate </Title>
          <DescText>
            You love trying new things, but going out to a restaurant is an
            ordeal. Take out is nice, but wouldn't it be nice to patronize more
            and find even more unique dishes?
          </DescText>
          <FindMore href="goessomewhere"> See Reviews </FindMore>
        </FoodieDesc>

        <ChefDesc>
          <Title> The Home Chef </Title>
          <DescText>
            You have a skill that none of your neighbors have. You come from a
            incredibly unique background and there aren't many restaurants
            around that make your special dish like your grandmother or
            grandfather does. Don't keep that skill locked up for special
            ocasions and close family memebers. Share it!
          </DescText>
          <FindMore href="goessomewhere"> Find Chefs </FindMore>
        </ChefDesc>
        <FoodieImg src={foodie} alt="foodie" />
        <ChefImg src={chef} alt="chef" />
      </GridContainer>
    </SectionContainer>
  );
};

export default AboutSum;
