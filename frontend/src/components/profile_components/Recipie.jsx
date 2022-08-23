import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaTrash, FaEdit } from "react-icons/fa";

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
  width[100%]
flex
flex-col
ml-5
`}
`;
const DetailItem = styled.div`
  ${tw`
flex
justify-items-start
`}
`;
const DetailKey = styled.h1`
  ${tw`
font-weight[800]
mr-2
`}
`;

const DetailText = styled.h1`
  ${tw`
font-weight[300]
align-self[flex-start]
text-left
`}
`;

const RecipieTitle = styled.h1`
  ${tw`
font-weight[800]
font-size[25px]
mr-2
align-self[flex-start]

`}
`;

const Actions = styled.div`
  ${tw` flex
  mr-5
  mt-2
  `}
`;

const DeleteButton = styled(FaTrash)`
  ${tw`
height[30px]
width[30px]
  text-white
bg-red-900
hover:transform[scale(1.1)]
cursor-pointer
border-2
border-black
border-radius[5px]
padding[2px]
margin[2px]
zIndex[100]
`}
`;

const EditButton = styled(FaEdit)`
  ${tw`
  height[30px]
width[30px]
hover:transform[scale(1.1)]
cursor-pointer
border-2
border-black
border-radius[5px]
padding[2px]
margin[2px]
zIndex[100]
`}
`;

const Recipie = ({ recipie, deleteRecipie, editRecipie }) => {
  const image = recipie.image_url[0];

  const truncate = (input, value) =>
    input.length > value ? `${input.substring(0, value)}...` : input;

  let description = truncate(recipie.dish_description, 50);
  let ingredients = truncate(recipie.ingredients, 20);

  return (
    <>
      <RecipiesContainer>
        <RecipiePhoto src={image} />
        <DetailsContainer>
          <DetailItem style={{ "justifyContent": "space-between" }}>
            <RecipieTitle> {recipie.dish_name}</RecipieTitle>
            <Actions>
              <EditButton
                data-modal="modal-three"
                data-payload={JSON.stringify(recipie)}
              />
              <DeleteButton
                data-modal="modal-four"
                data-payload={JSON.stringify(recipie._id)}
              />
            </Actions>
          </DetailItem>
          <DetailItem>
            <DetailKey> Description: </DetailKey>
            <DetailText>{description}</DetailText>
          </DetailItem>
          <DetailItem>
            <DetailKey> Ingredients: </DetailKey>
            <DetailText> {ingredients}</DetailText>
          </DetailItem>
          <DetailItem>
            <DetailKey> Potential Allergens:</DetailKey>
            <DetailText> {recipie.potential_allergens}</DetailText>
          </DetailItem>
        </DetailsContainer>
      </RecipiesContainer>
    </>
  );
};

export default Recipie;

//
