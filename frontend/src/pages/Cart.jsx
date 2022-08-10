import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CartContainer = styled.div`
  ${tw`
flex
`}
`;
const InYourCart = styled.div`
  ${tw`
bg-blue-300
`}
`;

const Cart = () => {
  return;
  <CartContainer>
    <InYourCart>Shopping Cart: 2 items in your cart</InYourCart>
  </CartContainer>;
};

export default Cart;
