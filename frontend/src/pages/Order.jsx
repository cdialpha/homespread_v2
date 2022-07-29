import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import FeaturedDishes from "../components/FeaturedDishes";

const FeaturedContainer = styled.div`
  ${tw`

`}
`;

const Order = () => {
  return (
    <div>
      Order
      <FeaturedDishes />
    </div>
  );
};

export default Order;
