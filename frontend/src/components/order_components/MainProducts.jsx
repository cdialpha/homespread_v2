import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { FaSlidersH } from "react-icons/fa";
import dimsum from "../../images/dimsum.png";
import tacos from "../../images/tacos.png";
import samosas from "../../images/samosa.png";
import goat from "../../images/goat.png";
import hummus from "../../images/hummus.png";
import south from "../../images/south.png";
import api from "../../api/api";

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
grid-cols-2
grid-rows-2
md:grid-rows-1
lg:grid-cols-4
xl:grid-cols-5
2xl:grid-cols-5
column-gap[2%]
row-gap[20px]
max-width[2000px]
  `};
`;

const GridItem = styled.div`
  ${tw`
    flex
    flex-col
    ml-auto
    mr-auto
    width[100%]
    height[100%]

`}
`;

const GridImages = styled.img`
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

const GridText = styled.div`
  ${tw`
    text-white
    height[30px]
    align-self[center]
    font-size[25px]
    font-weight[800]

`}
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
              <GridItem>
                <GridImages src={recipie.image_url}></GridImages>
                <GridText>{recipie.dish_name}</GridText>
              </GridItem>
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
