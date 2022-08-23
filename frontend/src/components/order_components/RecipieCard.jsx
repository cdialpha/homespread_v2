import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const CardContainer = styled.div`
  ${tw`
flex
flex-col
ml-auto
mr-auto
height[450px]
width[300px]
md:height[450px]
md:width[300px]
`}
`;
const CardImg = styled.img`
  ${tw`
  border-2
  border-gray-500
  border-radius[15px]
  align-self[center]
  hover:transform[scale(1.05)]
  min-height[300px]
  min-width[300px]
`}
`;
const CardDetails = styled.div`
  ${tw`
  grid
  grid-rows-4
text-white
height[100px]
width[100%]
align-self[center]
font-size[20px]
font-weight[800]
padding[0px]
margin[0px]
`}
  grid-template-columns: 1fr 1fr;
`;
const DishTitle = styled.div`
  ${tw`
height[30px]
font-size[30px]

`}
  grid-column: 1/3;
  grid-row: 1;
`;
const Tags = styled.div`
  ${tw`
  height[25px]
place-self-end
`}
  grid-column: 2/3;
  grid-row: 1;
`;
const Rating = styled.div`
  ${tw`
flex
height[25px]
`}
  grid-column: 1/2;
  grid-row: 3;
`;
const NumberOfReviews = styled.div`
  ${tw`
  height[25px]
  ml-2
`}
`;
const Price = styled.div`
  ${tw`
  height[25px]
`}
  grid-column: 1/2;
  grid-row: 4;
`;
const SalePrice = styled.div`
  ${tw`
  height[25px]
`}
`;
const Seller = styled.div`
  ${tw`
  height[25px]
  
`}
`;
const AddToCart = styled.button`
  ${tw`
width[100%]
padding[2px]
bg-gray-800
border-2
border-gray-900
border-radius[15px]
text-gray-400
mt-1
`}
`;
const SellerContainer = styled.div`
  ${tw`
flex
justify-end

align-items[center]
`}
  grid-column: 2;
  grid-row: 3 / 5;
`;

const SellerImg = styled.img`
  ${tw`
  height[50px]
  align-self[center]
  ml-2
`}
`;

const RecipieCard = ({ recipieDetails }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <CardImg src={recipieDetails.image_url} />
      <CardDetails>
        <DishTitle> {recipieDetails.dish_name} </DishTitle>
        <Tags>{recipieDetails.tags}</Tags>

        <Rating>
          <ReactStars
            count={5}
            size={20}
            edit={false}
            value={4} //recipieDetails.rating[0]
          />
          <NumberOfReviews>(4)</NumberOfReviews>
        </Rating>
        <SellerContainer>
          <Seller>by {recipieDetails.chefId.username}</Seller>
          <SellerImg src={recipieDetails.chefId.profile_pic} />
        </SellerContainer>
        <Price>$ {recipieDetails.price} </Price>
        <SalePrice></SalePrice>
      </CardDetails>
      <AddToCart
        onClick={() => {
          dispatch(addToCart(recipieDetails));
        }}
      >
        Add to Cart
      </AddToCart>
    </CardContainer>
  );
};

export default RecipieCard;
