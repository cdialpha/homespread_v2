import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import mastercard from "../../images/mastercard.png";
import amex from "../../images/amex.png";
import visa from "../../images/visa.png";
import paypal from "../../images/paypal.png";
import { ImPriceTag } from "react-icons/im";
const Container = styled.div`
  ${tw`
height[800px]
width[600px]
border-2
  border-gray-200
  shadow-2xl
  border-radius[25px]
  padding[30px 30px 30px 30px]
  flex
  flex-col
`}
`;
const TextContainer = styled.div`
  ${tw`
flex
justify-between
`}
`;
const Text = styled.div`
  ${tw`
font-weight[900]
text-2xl
mt-5

`}
`;
const ItemTotal = styled(Text)`
  ${tw`
font-weight[400]
`}
`;
const PaymentMethodContainer = styled.div`
  ${tw`
flex
`}
`;
const PaymentMethod = styled.img`
  ${tw`
height[75px]
width[100px]
bg-white
`}
`;
const Label = styled.label`
  ${tw`
flex
justify-center
`}
`;
const Button = styled.button`
  ${tw`
flex
mt-5
ml-auto
mr-auto
pl-3
pr-3
pt-1
pb-1 
font-weight[900]
height[45px]
width[80%]
border-2
border-black
border-radius[35px]
bg-white
text-black
hover:bg-gray-800
hover:text-white
`}
`;
const Coupon = styled(ImPriceTag)`
  ${tw`
text-white
bg-blue-900
font-size[30px]
border-radius[20px]
padding[2px 2px]
mr-5
`}
`;

const radioOptions = [
  { key: "Option 1", value: "rOption1" },
  { key: "Option 2", value: "rOption2" },
  { key: "Option 3", value: "rOption3" },
];

const Payment = () => {
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);

  return (
    <Container>
      <Text>Select your payment method: </Text>
      <Label>
        {" "}
        <input
          style={{ "height": "40px", "width": "40px" }}
          type="radio"
          name="payment_method"
          value={radio1}
          checked={radio1}
          onClick={() => {
            setRadio1(!radio1);
          }}
        />
        <PaymentMethodContainer>
          <PaymentMethod src={visa} />
          <PaymentMethod src={mastercard} />
          <PaymentMethod src={amex} />
        </PaymentMethodContainer>
      </Label>
      <Label>
        <input
          style={{ "height": "40px", "width": "40px" }}
          type="radio"
          name="payment_method"
          value={radio2}
          checked={radio2}
          onClick={() => {
            setRadio2(!radio2);
          }}
        />
        <PaymentMethod src={paypal} />
      </Label>
      <TextContainer>
        <Text> Item(s) Total </Text>
        <Text> $100.00 </Text>
      </TextContainer>
      <TextContainer
        style={{
          "borderBottom": "solid 2px lightgray",
          "padding-bottom": "20px",
        }}
      >
        <Text> Discount </Text>
        <Text> - $0.00 </Text>
      </TextContainer>
      <TextContainer>
        <Text> Subtotal </Text>
        <Text> $100.00 </Text>
      </TextContainer>
      <Button> Proceed to Checkout </Button>
      <Button>
        <Coupon />
        Apply a coupon code
      </Button>
    </Container>
  );
};

export default Payment;
