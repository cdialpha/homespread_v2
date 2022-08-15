import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LeadInFilter from "../components/order_components/LeadInFilter";
import MainProducts from "../components/order_components/MainProducts";
import ChefsYouMightLike from "../components/order_components/ChefsYouMightLike";
import RecentlyViewed from "../components/order_components/RecentlyViewed";
import Trending from "../components/order_components/Trending";

const View = styled.div`
  ${tw`

flex
flex-col

`}
`;

const Order = () => {
  return (
    <View>
      <LeadInFilter />
      <MainProducts />
      <ChefsYouMightLike />
      <RecentlyViewed />
      <Trending />
    </View>
  );
};

export default Order;
