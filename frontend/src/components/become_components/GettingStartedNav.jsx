import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BecomeHero from "../../images/become.jpg";
import { Link } from "react-scroll";

const HeroContainer = styled.div`
  ${tw`
height[500px]
`}
`;

const Hero = styled.div`
  ${tw`
  flex
  flex-col
  justify-center
  height[500px]
  `}
  background-image: url(${BecomeHero}), linear-gradient(to left, #BBBBBB, #FFFFFFBB);
  background-size: cover;
  background-blend-mode: overlay;
`;
const HeroTitle = styled.h1`
  ${tw`
  text-8xl
  text-black
  font-weight[900]
  ml-auto
  mr-auto
  mt-20

  `}
  background-blend-mode: overlay;
`;
const HeroText = styled.h3`
  ${tw`
  text-4xl
  text-black
  font-weight[900]
  ml-auto
  mr-auto
  `}
`;
const GetStarted = styled.button`
  ${tw``}
`;

const Nav = styled.div`
  ${tw`
height[100px]
w-screen
flex
justify-center
`}
`;

const NavItem = styled(Link)`
  ${tw`
font-weight[900]
height[50px]
ml-10
mr-10
hover:text-gray-500
`}
`;

const GettingStartedHeader = () => {
  return (
    <>
      <HeroContainer>
        <Hero>
          <HeroTitle> Share Your Spice </HeroTitle>
          <HeroText> ... and make money while doing it </HeroText>
        </Hero>
      </HeroContainer>
      <Nav>
        <NavItem to="fees" smooth={true} duration={500}>
          Fees
        </NavItem>
        <NavItem to="support" smooth={true} duration={500}>
          Support
        </NavItem>
        <NavItem to="success" smooth={true} duration={500}>
          Stories
        </NavItem>
        <NavItem to="logistics" smooth={true} duration={500}>
          Logistics
        </NavItem>
        <NavItem to="faq" smooth={true} duration={500}>
          FAQ
        </NavItem>
      </Nav>
    </>
  );
};

export default GettingStartedHeader;
