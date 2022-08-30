import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { increment, decrement } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  ${tw`
  mt-5
  ml-auto
  mr-auto
  border-4
  width[90%]
  flex
  flex-col
  md:flex-row

  padding[20px 20px 20px 20px]
  shadow-xl
  border-radius[25px]

`}
`;

const Item = styled.img`
  ${tw`
md:height[250px]
md:width[250px]
border-2
border-gray-400
border-radius[25px]
ml-auto
mr-auto
md:ml-0
md:mr-5
`}
`;

const Header = styled.div`
  ${tw`
flex-col
lg:flex-row
width[100%]
justify-between
`}
`;
const ItemTitle = styled.div`
  ${tw`
flex
font-weight[900]
text-2xl
`}
`;
const SellerInfo = styled.div`
  ${tw`
flex
`}
`;

const SellerContact = styled.div`
  ${tw`
flex
flex-col
font-size[20px]
line-height[20px]
mt-auto
mb-auto
ml-2
`}
`;

const SellerImg = styled.img`
  ${tw`
height[70px]
width[70px]
inline-block
padding[5px 5px 5px 5px]
`}
`;

const ItemDetails = styled.div`
  ${tw`
flex
flex-col
`}
`;

const ItemPrice = styled.div`
  ${tw`

`}
`;
const QtyContainer = styled.div`
  ${tw`
flex
  `};
`;
const ActionButton = styled.button`
  ${tw`
  flex
  align-items[center] 
  self-center
  pl-1
  pr-1
  ml-2
  mr-2
  width[25px]
  height[25px]
  bg-gray-100
  border-2
  border-gray-200
  hover:bg-gray-200
 
`}
`;

const CartProductQuantity = styled.div`
  height: 30px;
  line-height: 30px;
`;

const CartItem = (props) => {
  const dispatch = useDispatch();

  let s;
  props.quantity > 1 ? (s = "s") : (s = "");
  let subtotal = props.price * props.quantity;
  return (
    <Container>
      <Item src={props.image_url} />

      <ItemDetails>
        <Header>
          <div>
            <ItemTitle>{`${props.quantity} order${s} of ${props.dish_name}`}</ItemTitle>
            <h1>
              <strong> Serving Size per order: </strong> {props.serving_size}
            </h1>
          </div>
          <SellerInfo>
            <SellerImg src={props.chefId.profile_pic} />
            <SellerContact>
              {props.chefId.username}
              <span>
                <a> Message Seller </a>
              </span>
            </SellerContact>
          </SellerInfo>
        </Header>
        <QtyContainer>
          <ActionButton
            disabled={props.quantity === 1}
            onClick={() => {
              dispatch(decrement(props._id));
            }}
          >
            -
          </ActionButton>
          <CartProductQuantity>Qty: {props.quantity}</CartProductQuantity>
          <ActionButton
            onClick={() => {
              dispatch(increment(props._id));
            }}
          >
            +
          </ActionButton>
        </QtyContainer>

        <ItemPrice>
          <strong> Price per unit:</strong> {props.price}{" "}
        </ItemPrice>
        <ItemPrice>
          <strong> Subtotal: </strong> {subtotal}{" "}
        </ItemPrice>
      </ItemDetails>
    </Container>
  );
};

export default CartItem;
