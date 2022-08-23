import React from "react";
import comingsoon from "../images/comingsoon.png";
import styled from "styled-components";
import tw from "twin.macro";

const View = styled.div`
  ${tw` 
height[1000px]
`}
`;
const Container = styled.div`
  ${tw`
width[1000px]
border-8
border-gray-200
text-3xl
padding[100px 100px 100px 100px]
ml-auto
mr-auto
mt-10
`}
`;
const Image = styled.img`
  ${tw`
width[800px]
ml-auto
mr-auto
mt-10
`}
`;

const ComingSoon = () => {
  return (
    <View>
      <Container>
        We're sorry, this page is
        <Image src={comingsoon} />
      </Container>
    </View>
  );
};

export default ComingSoon;
