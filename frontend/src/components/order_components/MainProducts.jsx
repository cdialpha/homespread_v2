import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { FaSlidersH } from "react-icons/fa";
import api from "../../api/api";
import store from "../../store";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import Card from "./Card";

const View = styled.div`
  ${tw`
bg-black
width[100%]
ml-auto
mr-auto
`}
`;
const FeatureHeader = styled.div`
  ${tw`
font-size[35px]
font-family['Dancing Script']
font-weight[900]
text-white
`}
`;
const GridContainer = styled.div`
  ${tw`
mt-2
ml-auto
mr-auto
pl-10
pr-10
mb-10
grid
grid-cols-1
grid-rows-2
md:grid-rows-1
lg:grid-cols-4
xl:grid-cols-5
2xl:grid-cols-5
column-gap[2%]
row-gap[50px]
max-width[2000px]
  `};
`;

const PageButtonContainer = styled.div`
  ${tw`
ml-10
mr-10
`}
`;
const PageButton = styled.button`
  ${tw`
text-white
ml-5
mr-5
pl-2
pr-2
border-2
border-white
border-radius[10px]
`}
`;

// RTK test

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(addToCart(3));

unsubscribe();

// test end

const MainProducts = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isDesktop = useMediaQuery({ minWidth: deviceSize.desktop });
  const isWidescreen = useMediaQuery({ minWidth: deviceSize.widescreen });
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, error, data } = useQuery(
    ["get-all-recipies", pageNumber],
    () => api.getAllRecipies(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  console.log(data?.getRecipies);

  return (
    <View>
      <FeatureHeader> Discover Cuisines </FeatureHeader>

      <GridContainer>
        {data
          ? data.getRecipies.map((recipie) => (
              <Card key={recipie._id} recipieDetails={recipie} />
            ))
          : null}
      </GridContainer>

      <PageButtonContainer>
        <PageButton
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </PageButton>
        <PageButton
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </PageButton>
      </PageButtonContainer>
    </View>
  );
};

export default MainProducts;
