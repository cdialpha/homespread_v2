import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ReactStars from "react-stars";

const CardContainer = styled.div`
  ${tw`
flex
flex-col
ml-auto
mr-auto
height[250px]

md:height[150px]

text-white
`}
`;
const CardImg = styled.img`
  ${tw`
  border-radius[15px]
  align-self[center]
  hover:transform[scale(1.05)]
  width[200px]
  height[200px]
  md:min-height[200px]
  md:min-width[200px]
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
  grid-template-rows: 2fr 1fr 1fr;
`;
const ChefName = styled.div`
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
place-self-start
`}
  grid-column: 1/3;
  grid-row: 3;
`;

const Rating = styled.div`
  ${tw`
flex
height[25px]
`}
  grid-column: 1/3;
  grid-row: 2;
`;
const NumberOfReviews = styled.div`
  ${tw`
  height[25px]
  ml-2
`}
`;

// const Price = styled.div`
//   ${tw`
//   height[25px]
// `}
//   grid-column: 1/2;
//   grid-row: 4;
// `;
// const SalePrice = styled.div`
//   ${tw`
//   height[25px]
// `}
// `;
// const Seller = styled.div`
//   ${tw`
//   height[25px]

// `}
// `;

const ChefCard = ({ chefDetails }) => {
  return (
    <CardContainer>
      <CardImg src={chefDetails.profile_pic} />
      <CardDetails>
        <Rating>
          <ReactStars
            count={5}
            size={20}
            edit={false}
            value={4} //recipieDetails.rating[0]
          />
          <NumberOfReviews>(4)</NumberOfReviews>
        </Rating>
        <ChefName>{chefDetails.username}</ChefName>
        <Tags>{chefDetails.cuisine_tags}</Tags>
      </CardDetails>
    </CardContainer>
  );
};

export default ChefCard;
