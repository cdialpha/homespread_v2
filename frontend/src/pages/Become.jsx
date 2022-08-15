import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";

// Components
import GettingStartedHeader from "../components/become_components/GettingStartedNav";
import SuccessStories from "../components/become_components/SuccessStories";
import Support from "../components/become_components/Support";
import Fees from "../components/become_components/Fees";
import ChangeRole from "../components/become_components/ChangeRole";

const View = styled.div`
  ${tw`
height[3000px]
`}
`;

const Become = () => {
  return (
    <View>
      <GettingStartedHeader />
      <ChangeRole />
      <Element name="success">
        <SuccessStories />
      </Element>
      <Element name="support">
        <Support />
      </Element>
      <Element name="fees">
        <Fees />
      </Element>
    </View>
  );
};

export default Become;
