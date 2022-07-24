import React from "react";
import hero from "../images/hero.jpg";
import styled from "styled-components";
import tw from "twin.macro";

const Hero = styled.div`
  ${tw` 
    w-screen
    height[700px]
    2xl:height[1000px]
`};

  background-image: url(${hero}), linear-gradient(to left, #000000aa, #000000);
  background-size: cover;
  background-blend-mode: overlay;
`;

const Container = styled.div`
  ${tw`
  ml-5
  lg:ml-20

`}
  width:80vw;
  height: 400px;
`;

const HeroText = styled.div`
  ${tw`
  text-white
  2xl:font-size[130px]
  xl:font-size[100px]
  lg:font-size[70px]
  md:font-size[60px] 
  font-size[50px]
  font-family['Dancing Script']
`};
`;

const HeroSubText = styled.div`
  ${tw`
  text-white
  pt-10
  margin-top[50px]
  md:margin-top[50px]
  2xl:font-size[80px]
  xl:font-size[60px]
  lg:font-size[50px]
  md:font-size[40px] 
  font-size[35px]
  font-family['Dancing Script']
`};
`;

const HeroSubSubText = styled.div`
  ${tw`
  text-white
  2xl:font-size[40px]
  xl:font-size[30px]
  lg:font-size[30px] 
  md:font-size[25px]
  sm:font-size[20px]
  font-family['Dancing Script']
`};
`;

const SearchBar = styled.input`
  ${tw`
  width[300px]
  lg:width[450px]
  2xl:width[700px]
`};

  height: 40px;
  display: inline;
  border-radius: 10px;
`;

const LandingPage = () => {
  return (
    <div>
      <Hero>
        <Container>
          <HeroText style={{ paddingTop: "60px" }}>
            Food tourism by your neighbor
          </HeroText>
          <HeroSubText> Support Local Families </HeroSubText>
          <HeroSubSubText> Find diverse cuisine here: </HeroSubSubText>
          <SearchBar placeholder=" Pakistani..."></SearchBar>
        </Container>
      </Hero>
    </div>
  );
};

export default LandingPage;
