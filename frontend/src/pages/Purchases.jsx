import React from "react";
import ComingSoon from "../components/ComingSoon";
import styled from "styled-components";
import tw from "twin.macro";

const View = styled.div`
  ${tw` 
height[1000px]
text-4xl
mt-10
text-center
`}
`;

const Purchases = () => {
  return (
    <View>
      Your Purchases
      <ComingSoon />
    </View>
  );
};

export default Purchases;
