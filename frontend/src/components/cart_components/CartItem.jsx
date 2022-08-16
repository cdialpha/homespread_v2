import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import FormikControl from "../formik_components/FormikControl";

const Container = styled.div`
  ${tw`
  mt-5
  border-4
  border-blue-200
width[90%]
flex
flex-col
padding[20px 20px 20px 20px]
`}
`;

const Header = styled.div`
  ${tw`
flex
justify-between
`}
`;

const SellerImg = styled.img`
  ${tw`
height[50px]
width[50px]
inline-block
`}
`;
const ItemContainer = styled.div`
  ${tw`
flex
justify-around
mt-2
`}
`;

const Item = styled.img`
  ${tw`
height[300px]
width[300px]
border-2
border-gray-400
border-radius[25px]
`}
`;

const ItemDetails = styled.div`
  ${tw`
flex
flex-col
`}
`;

const Qty = styled.div`
  ${tw`

`}
`;

const ItemPrice = styled.div`
  ${tw`
text-green-900
font-weight[900]
`}
`;

const CartItem = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  return (
    <Container>
      <Header>
        <div>
          <SellerImg
            src={"https://boston-spread-profiles.s3.amazonaws.com/anon.png"}
          />
          <span> Profile Name </span>
        </div>
        <h1> Contact Seller </h1>
      </Header>
      <ItemContainer>
        <Item
          src={
            "https://boston-spread-images.s3.amazonaws.com/09dc208b938e596a6acb1c067055f7b1"
          }
        />
        <ItemDetails>
          <h1> NjamaNjama</h1>
          <h1> Serving Size: 4 cups</h1>
          <h1> </h1>
          <h1> </h1>
          <h1> </h1>
          <h1> Add a note to the Seller</h1>
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
        </ItemDetails>
        <Qty>
          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />
        </Qty>
        <ItemPrice> $10.00 </ItemPrice>
      </ItemContainer>
    </Container>
  );
};

export default CartItem;
