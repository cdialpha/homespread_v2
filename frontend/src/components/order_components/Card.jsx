import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ReactStars from "react-stars";

const CardContainer = styled.div`
  ${tw`
flex
flex-col
ml-auto
mr-auto
width[100%]
height[100%] 
`}
`;

const CardImg = styled.img`
  ${tw`

  border-2
  border-gray-500
  border-radius[15px]
  align-self[center]
  hover:transform[scale(1.05)]
  height[300px]
  width[300px]
`}
`;

const CardDetails = styled.div`
  ${tw`
flex
flex-col
text-white
height[30px]
align-self[center]
font-size[25px]
font-weight[800]
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

const Chef = styled.div`
  ${tw`

`}
`;

const Special = styled.div`
  ${tw`

`}
`;

const Card = ({ recipieDetails }) => {
  console.log(recipieDetails);
  return (
    <CardContainer>
      <CardImg src={recipieDetails.image_url} />
      <CardDetails>
        <DishTitle> {recipieDetails.dish_name} </DishTitle>
        {/* <ReactStars
          count={5}
          size={24}
          edit={false}
          value={recipieDetails.rating[0]}
        /> */}
        <NumberOfReviews>{recipieDetails.rating[1]}</NumberOfReviews>
        <Price></Price>
        <SalePrice></SalePrice>
        <Chef> </Chef>
      </CardDetails>
    </CardContainer>
  );
};

export default Card;
