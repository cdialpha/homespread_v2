import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Payment from "../components/cart_components/Payment";
import CartItem from "../components/cart_components/CartItem";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/formik_components/FormikControl";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increment,
  decrement,
  getCartTotal,
  clear,
} from "../features/cart/cartSlice";

const View = styled.div`
  ${tw`
  flex
  flex-col
  xl:flex-row
  mt-10
  ml-5
  mr-5  
`}
`;

const CartContainer = styled.div`
  ${tw`
  flex
  flex-col
  mb-10
  xl:width[60%]
`}
`;

const CartHeader = styled.div`
  ${tw`
flex
flex-col
width[90%]
ml-auto
mr-auto
text-center
lg:text-left
lg:flex-row
lg:justify-between
`}
`;

const InYourCart = styled.div`
  ${tw`
font-size[40px]
font-weight[900]
lg:ml-5
`}
`;

const EmptyCart = styled.div`
  ${tw`
padding[16px]
bg-gray-300
text-align[center]

`}
`;

const CartClearButton = styled.button`
  ${tw`
  bg-red-200 
  width[150px]
  height[35px]
  padding[2px 10px 2px 10px]
  border-radius[10px]
  cursor-pointer
  hover:bg-gray-300
  md:mt-auto
  md:mb-auto
  ml-auto
  mr-auto
  lg:mr-0
`}
`;

const Cart = () => {
  const initialValues = {
    note: "", //add a note, text area
    quantity: "", // selectOption
    paymentMethod: "", //radioOption
  };

  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.items;
  const dispatch = useDispatch();
  const totalPrice = dispatch(getCartTotal());
  let numberOfItems = cartState.totalNumItems;
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
                <CartHeader>
                  <InYourCart>{`There are ${numberOfItems} items in your cart`}</InYourCart>
                  {cartItems.length > 0 ? (
                    <CartClearButton
                      onClick={() => {
                        dispatch(clear());
                      }}
                    >
                      Empty the Cart
                    </CartClearButton>
                  ) : null}
                </CartHeader>
                {cartItems[0]?._id
                  ? cartState.items.map((item) => (
                      <CartItem key={item._id} {...item} />
                    ))
                  : null}

                {/* <FormikControl
                  control="textarea"
                  label="Description"
                  name="description"
                /> */}
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
