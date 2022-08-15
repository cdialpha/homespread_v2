import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import StarRatingComponent from "react-star-rating-component";

const Container = styled.div`
  ${tw`
flex
flex-col
`}
`;

const CardImg = stlyed.img`
${tw`

`}
`;

const CardDetails = styled.div`
  ${tw`
flex
flex-col
`}
`;
const DishTitle = styled.div`
  ${tw`

`}
`;

const NumberOfReviews = styled.div`
  ${tw`

`}
`;

const Price = styled.div`
  ${tw`

`}
`;

const SalePrice = styled.div`
  ${tw`

`}
`;

const Chef = stlyed.div`
${tw`

`}
`;

const Special = stlyed.div`
${tw`

`}
`;

const Card = (props) => {
  return;
  <Container>
    <CardImg />
    <CardDetails>
      <DishTitle> {props.recpie.title} </DishTitle>
      <StarRatingComponent
        name="rate2"
        editing={false}
        renderStarIcon={() => <span></span>}
        starCount={10}
        value={8}
      />
      <NumberOfReviews></NumberOfReviews>
      <Price></Price>
      <SalePrice></SalePrice>
      <Chef> </Chef>
    </CardDetails>
  </Container>;
};

export default Card;
