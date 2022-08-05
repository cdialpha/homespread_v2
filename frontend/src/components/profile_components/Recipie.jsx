import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const RecipiesContainer = styled.div`
  ${tw`
  flex
  height[200px]
  border-2
  border-gray-300
  margin[20px]
`}
`;

const RecipiePhoto = styled.img`
  ${tw`
    height[200px]
    min-width[200px] 
    max-width[200px]
    flex-grow-0
`}
`;

const DetailsContainer = styled.div`
  ${tw`
flex
flex-col
`}
`;

const DetailKey = styled.h1`
  ${tw`
font-weight[800]
`}
`;

const Recipie = ({ recipie }) => {
  const image = recipie.image_url[0];
  console.log(image);

  return (
    <>
      <RecipiesContainer>
        <RecipiePhoto src={image} />
        <DetailsContainer>
          <DetailKey> {recipie.dish_name}</DetailKey>
          <DetailKey> Description: </DetailKey>
          <h3>{recipie.dish_description}</h3>
          <DetailKey> Ingredients: </DetailKey> <h3> {recipie.ingredients}</h3>
          <DetailKey> Potential Allergens:</DetailKey>
          <h3> {recipie.potential_allergens}</h3>
        </DetailsContainer>
      </RecipiesContainer>
    </>
  );
};

export default Recipie;
