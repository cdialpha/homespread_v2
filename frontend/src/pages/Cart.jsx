import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const View = styled.div`
  ${tw`
    height[1000px]
`}
`;

const CartContainer = styled.div`
  ${tw`
  flex
  flex-col
  mt-10
  ml-5
  mr-5
  border-2
  border-gray-200
  height[200px]
`}
`;
const InYourCart = styled.div`
  ${tw`

font-size[40px]
font-weight[900]
height[50px]
`}
`;

const Item = styled.div`
  ${tw`
border-4
border-blue-200
height[100px]
width[100px]

`}
`;

const Cart = () => {
  return (
    <View>
      <CartContainer>
        <InYourCart>2 items in your cart</InYourCart>
        <Item>item</Item>
      </CartContainer>
    </View>
  );
};

export default Cart;
