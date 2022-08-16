import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Payment from "../components/cart_components/Payment";
import CartItem from "../components/cart_components/CartItem";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/formik_components/FormikControl";

const View = styled.div`
  ${tw`
  mt-10
  ml-5
  mr-5  
  flex
    border-2
  border-gray-200
  
`}
`;
const CartContainer = styled.div`
  ${tw`
  flex
  flex-col
  
  border-2
  border-gray-200
width[60%]
  
`}
`;
const InYourCart = styled.div`
  ${tw`

font-size[40px]
font-weight[900]
height[50px]
`}
`;

const Cart = () => {
  const initialValues = {
    email: "",
    note: "", //add a note, text area
    quantity: "", // selectOption
    paymentMethod: "", //radioOption
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({});

  const onSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <View>
              <CartContainer>
                <InYourCart>2 items in your cart</InYourCart>
                <CartItem></CartItem>
              </CartContainer>
              <Payment />
            </View>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Cart;
