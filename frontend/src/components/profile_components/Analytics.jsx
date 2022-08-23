import React from "react";
import ComingSoon from "../ComingSoon";
import styled from "styled-components";
import tw from "twin.macro";

const View = styled.div`
  ${tw` 
height[1000px]
text-4xl
mt-10
`}
`;

const Analytics = () => {
  return (
    <View>
      Analytics
      <ComingSoon />
    </View>
  );
};
export default Analytics;
