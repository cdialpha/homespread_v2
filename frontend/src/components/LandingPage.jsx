import React from 'react'
import hero from '../images/hero.jpg'
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`${tw`
  pl-20
`}
  height: 1000px;
`;

const Hero = styled.div`
${tw` 
    w-screen
`};
    height: 1000px;
    background-image: url(${hero}),linear-gradient(to left, #000000AA, #000000);    
    background-size: cover;
    background-blend-mode: overlay;
    `;

const HeroText = styled.div` 
${tw`
  text-white
  2xl:font-size[130px]
  xl:font-size[100px]
  lg:font-size[70px]
  md:font-size[60px] 
  sm:font-size[50px]
  font-family['Dancing Script']
`};
`;

const HeroSubtext = styled.div` 
${tw`
  text-white
  2xl:font-size[40px]
  xl:font-size[35px]
  lg:font-size[30px] 
  md:font-size[25px]
  sm:font-size[20px]
`};
  margin-top: 200px;

`;

const SearchBar = styled.input`
${tw`
  font-size[30px]
`};
  width: 500px
  height: 40px;
  display: inline;
  border-radius: 10px;
`;


const LandingPage = () => {
  return (
    <div>
        <Hero> 
        <Container> 
          <HeroText style={{paddingTop: "60px"}}> Food tourism by your neighbor </HeroText>
          <HeroText> Support Local Families </HeroText>
          <HeroSubtext> Find diverse cuisine here:  </HeroSubtext>
          <SearchBar placeholder=' Pakistani...'></SearchBar>
        </Container>
        </Hero>
    </div>
  )
}

export default LandingPage