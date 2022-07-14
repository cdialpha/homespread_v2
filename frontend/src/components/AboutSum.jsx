import React from 'react'
import foodie from '../images/foodie.png'
import chef from '../images/chef.png'
import styled from "styled-components";
import tw from "twin.macro";
import chopping from '../images/about_background.jpg'

const SectionContainer = styled.div`
    padding-top: 25px;
    padding-bottom: 100px;
    display: grid;
    grid-template-columns: 0.25fr 1fr 1fr 0.25fr;
    grid-template-rows: 0.5fr auto auto; 
    row-gap: 20px;
    column-gap: 20px; 
    background-image: url(${chopping});
    background-color: #FFFFFFAA;    
    background-size: cover;
    background-blend-mode: overlay;
`
const SectionTitle = styled.div`
${tw`
    2xl:font-size[130px]
    xl:font-size[100px]
    lg:font-size[90px]
    md:font-size[50px] 
    sm:font-size[25px]
    text-center
    font-family['Dancing Script']
`};  
    grid-column-start: 2;
    grid-column-end:4;
`;
const AboutImg = styled.div`
    height: auto;
    width: auto;
`
const Desc = styled.div`
    margin-top: 150px;
    width: auto;
`;

const FoodieImg = styled(AboutImg)`
    grid-column-start: 2;
    grid-column-end:3;
    grid-row-start:2;
    grid-row-end: 3;  
    margin-left: -20px;  
`;

const ChefImg = styled(AboutImg)`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
`;

const FoodieDesc = styled(Desc)`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const ChefDesc = styled(Desc)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`${tw`
    2xl:font-size[120px]
    xl:font-size[100px] 
    lg:font-size[75px]
    md:font-size[50px]
    sm:font-size[40px]
    font-family['Dancing Script']
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

const FindMore = styled.a`${tw`
    font-weight[900]
    2xl:font-size[25px]
    xl:font-size[20px] 
    lg:font-size[20px]
    md:font-size[20px]
    sm:font-size[20px]
`}
    padding-top: 10px;
    color:#1d1a1a;
    &:hover { 
        color: #fbb830 
    } 
`
 

const AboutSum = () => {
  return (
    <SectionContainer> 
        <SectionTitle> Connecting Boston </SectionTitle>
        <FoodieDesc> 
            <Title> The Foodie </Title>
            <DescText> This is some text about the Foodie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</DescText> 
            <FindMore href="goessomewhere"> See Reviews </FindMore>
        </FoodieDesc>
        
        <ChefDesc>
            <Title> The Chef </Title>
            <DescText> This is some text about the Chef. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</DescText> 
            <FindMore href="goessomewhere"> Find Chefs </FindMore>
        </ChefDesc>
            <FoodieImg> <img src={foodie} alt="foodie" /> </FoodieImg>
            <ChefImg> <img src={chef} alt="chef"/> </ChefImg>
    </SectionContainer>
  )
}

export default AboutSum