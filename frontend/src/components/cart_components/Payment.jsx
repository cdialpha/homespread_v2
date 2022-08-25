import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import mastercard from "../../images/mastercard.png";
import amex from "../../images/amex.png";
import visa from "../../images/visa.png";
import paypal from "../../images/paypal.png";
import { ImPriceTag } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../features/cart/cartSlice";

const Container = styled.div`
  ${tw`
  width[90%]
  xl:width[500px]
  border-2
  border-gray-200
  shadow-2xl
  border-radius[25px]
  padding[30px 30px 30px 30px]
  flex
  flex-col
  ml-auto
  mr-auto
  mt-5
  mb-5
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
justify-end
`}
`;
const PaymentMethod = styled.img`
  ${tw`
  height[40px]
  width[50px]
md:height[75px]
md:width[100px]
bg-white

`}
`;

const Radio = styled.input`
  ${tw`
height[20px]
width[20px]
md:height[40px]
md:width[40px] 
mt-auto
mb-auto
mr-5
`}
`;
const Label = styled.label`
  ${tw`
flex
mt-2
mb-2
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

  const cartState = useSelector((state) => state.cart);
  let totalPrice = cartState.totalPrice;
  let totalNumItems = cartState.totalNumItems;

  return (
    <Container>
      <Text>Select your payment method: </Text>
      <Label>
        {" "}
        <Radio
          type="radio"
          name="payment_method"
          value={radio1}
          checked={radio1}
          onClick={() => {
            setRadio2(false);
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
        <Radio
          type="radio"
          name="payment_method"
          value={radio2}
          checked={radio2}
          onClick={() => {
            setRadio1(false);
            setRadio2(!radio2);
          }}
        />
        <PaymentMethod src={paypal} />
      </Label>
      <TextContainer>
        <Text> Item(s) Total </Text>
        <Text> {totalPrice} </Text>
      </TextContainer>
      <TextContainer
        style={{
          "borderBottom": "solid 2px lightgray",
          "paddingBottom": "20px",
        }}
      >
        <Text> Discount </Text>
        <Text> - $0.00 </Text>
      </TextContainer>
      <TextContainer>
        <Text> Subtotal </Text>
        <Text> {totalPrice} </Text>
      </TextContainer>
      <Button type="button" data-modal="modal-six">
        Proceed to Checkout
      </Button>
      <Button type="button" data-modal="modal-six">
        <Coupon />
        Apply a coupon code
      </Button>
    </Container>
  );
};

export default Payment;
