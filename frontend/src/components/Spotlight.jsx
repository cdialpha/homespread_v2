import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// images for carousel
import ukrainian from "../images/ukrainian.jpg"
import haitian from "../images/haitian.jpg"
import pakistani from "../images/pakistani.jpg"
import mexican from "../images/mexican.jpg"
import bosnian from "../images/bosnian.jpg"
import argentinian from "../images/argentinian.jpg"
import iranian from "../images/iranian.jpeg"

const SpotlightContainer = styled.div`
${tw`
    w-screen
    h-auto
    flex
    flex-col
    relative
    pt-10
    pb-1
    xl:pt-20
    xl:pb-2
    items-center
    mt-0
    mb-10    
`};
    background-color: #f7f7f7;    
`;
const Title = tw.h1`
    pt-20
    pb-10
    text-2xl
    2xl:font-size[120px] 
    xl:font-size[80px]
    lg:font-size[60px] 
    2xl:mt-6
    2xl:mb-6
    font-bold
    text-center
`;
const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-4
    max-w-3xl
`;
const CaroselContainer = tw.div`
    w-screen
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
`;
const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}
  img {
    ${tw`
            max-w-full
            max-h-full
        `}
  }
`;
const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

const Spotlight = () => {
    return( 
        <SpotlightContainer name="spotlight">
         <Title> Meet Our Chefs </Title>
         <SectionInfo>
         The start-up costs for being able to operate a business can be cumbersome, especially if you don't have the money to have a brick and mortar," she said. "So the idea is people are able to incubate right out of their own kitchens. One of the people who plans to start making food right away is Andree Entezari. He's a Boston University master's student who says he'll make an Iranian fruit leather called lavashak to sell at farmers markets. It opens up so much opportunity, not just for economic development, but for your local community — engaging with your local community through food," he told Radio Boston.
        </SectionInfo> 
        <CaroselContainer>
            <Carousel dynamicHeight={false}> 
                <Item> <img src={haitian} alt="a person cooking"/> 
                <Description>Stéphanie, 29 -- Port au prince, Haiti</Description> </Item>
                <Item> <img src={ukrainian} alt="a person cooking"/>
                <Description> Ulyana, 82 -- Berehove, Ukraine</Description></Item>
                <Item> <img src={mexican} alt="a person cooking"/> 
                <Description>Emiliano, 33 -- Chipas, Mexico</Description></Item>
                <Item> <img src={iranian} alt="a person cooking"/>
                <Description>Ziwar, 29 -- Tehran, Iran</Description></Item>
                <Item> <img src={bosnian} alt="a person cooking"/>
                <Description>Robin, 23 -- Riga, Estonia</Description></Item> 
                <Item> <img src={argentinian} alt="a person cooking"/>
                <Description>Camila, 45 -- Salta, Argentina</Description></Item>
                <Item> <img src={pakistani} alt="a person cooking"/>
                <Description>Arafaa, 33 -- Quetta, Pakistan</Description></Item>  
            </Carousel>
        </CaroselContainer>
        </SpotlightContainer>
)
}

export default Spotlight;