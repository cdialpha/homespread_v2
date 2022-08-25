import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import tw from "twin.macro";
import { FaSlidersH, FaAngleDown } from "react-icons/fa";
import api from "../../api/api";
import RecipieCard from "./RecipieCard";

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
  font-size[40px]
  md:font-size[70px]
font-family['Dancing Script']
font-weight[900]
text-white
text-center
`}
`;
const GridContainer = styled.div`
  ${tw`
mt-2
ml-auto
mr-auto
md:pl-10
md:pr-10
mb-10
grid
grid-cols-1
grid-rows-2
md:grid-cols-2
md:grid-rows-1
lg:grid-cols-3
xl:grid-cols-4
2xl:grid-cols-5
column-gap[0%]
md:column-gap[5%]
row-gap[50px]
max-width[2000px]
  `};
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
hover:bg-white
hover:text-black
`}
`;

const PageNumber = styled.button`
  ${tw`
text-white
lg:ml-5
lg:mr-5
pl-2
pr-2
hover:bg-white
hover:text-black
hover:border-2
hover:border-white
hover:border-radius[15px]

`}
`;

const FilterButton = styled.button`
  ${tw`
flex
justify-around
  text-black
ml-5
mr-5
pl-2
pr-2
border-2
border-white
border-radius[10px]
bg-white
width[150px]
align-items[center]
border-2
border-gray-600
`}
`;
const FilterContainer = styled.div`
  ${tw`
flex
justify-between
max-width[2000px]
ml-auto
mr-auto
pl-5
lg:pr-5
mt-5
mb-5
`}
`;

const PageButtonContainer = styled(FilterContainer)`
  ${tw`
  justify-center
  mt-0
  mb-5
`}
`;

const MainProducts = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, error, data } = useQuery(
    ["get-all-recipies", pageNumber],
    () => api.getAllRecipies(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  // console.log(data?.getRecipies);

  return (
    <View>
      <FeatureHeader> What's for tonight? </FeatureHeader>
      <FilterContainer>
        <FilterButton data-modal="modal-five">
          <FaSlidersH />
          All Filters
        </FilterButton>

        <FilterButton type="button" data-modal="modal-six">
          Sort By <FaAngleDown />
        </FilterButton>
      </FilterContainer>
      <PageButtonContainer>
        <PageButton
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </PageButton>
        <PageNumber> 1 </PageNumber>
        <PageNumber> 2 </PageNumber>
        <PageNumber> 3 </PageNumber>
        <PageNumber> 4 </PageNumber>
        <PageButton
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </PageButton>
      </PageButtonContainer>
      <GridContainer style={{}}>
        {data
          ? data.getRecipies.map((recipie) => (
              <RecipieCard key={recipie._id} recipieDetails={recipie} />
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
        <PageNumber> 1 </PageNumber>
        <PageNumber> 2 </PageNumber>
        <PageNumber> 3 </PageNumber>
        <PageNumber> 4 </PageNumber>
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
