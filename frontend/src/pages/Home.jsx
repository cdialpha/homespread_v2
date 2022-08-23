import styled from "styled-components";
import tw from "twin.macro";

import Features from "../components/homepage_components/Features";
import LandingPage from "../components/homepage_components/LandingPage";
import AboutSum from "../components/homepage_components/AboutSum";
import Spotlight from "../components/homepage_components/Spotlight";

const HomeContainer = styled.div`
  ${tw`
flex
w-full
h-full
ml-auto
mr-auto
overflow-hidden
flex-col
`};
  max-width: 2000px;
  min-width: 390px;
`;

function Home() {
  return (
    <>
      <HomeContainer>
        <LandingPage />
        <AboutSum />
        <Features />
        <Spotlight />
      </HomeContainer>
    </>
  );
}

export default Home;
