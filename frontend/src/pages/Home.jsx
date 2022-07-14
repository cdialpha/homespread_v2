import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar';
import AboutSum from '../components/AboutSum'
import Spotlight from '../components/Spotlight';
import styled from "styled-components";
import tw from "twin.macro";
import Features from '../components/Features';
import Footer from '../components/Footer';

const HomeContainer = styled.div`
  ${tw`
flex
w-full
h-full
overflow-hidden
flex-col
`};
`;
  
function Home() {
  return (
    <>
      <HomeContainer>
      <LandingPage/>
      <AboutSum/>
      <Features/>
      <Spotlight/>
      <Footer/>
      </HomeContainer>
    </>
  );
}

export default Home;
