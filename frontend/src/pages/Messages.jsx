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

const Messages = () => {
  return (
    <View>
      Messages
      <ComingSoon />
    </View>
  );
};
export default Messages;
