import LandingPage from '../components/LandingPage'
import AboutSum from '../components/AboutSum'
import Spotlight from '../components/Spotlight';
import styled from "styled-components";
import tw from "twin.macro";
import Features from '../components/Features';

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
max-width:2000px;
`;
  
function Home() {
  return (
    <>
      <HomeContainer>
      <LandingPage/>
      <AboutSum/>
      <Features/>
      <Spotlight/>
      </HomeContainer>
    </>
  );
}

export default Home;
