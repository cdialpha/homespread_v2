import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ModalShell from "../ModalShell";
import comingsoon from "../images/comingsoon.png";

const ModalMask = styled.div`
  ${tw`
  fixed
  top[0px]
  bottom[0px]
  left[0px]
  right[0px]
  z-10
  bg-opacity-50
  bg-black
  `}
`;

const ModalBody = styled.div`
  ${tw`
    flex
    flex-col
    justify-around
    position[fixed]
    width[300px]
    height[250px]
    lg:width[500px]
    border-radius[10px]
    border-4
    lg:padding[40px 10px 40px 10px]
  `}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1000;
`;

const Header = styled.div`
  ${tw`
    flex
    justify-between
    align-items[center]
    padding[20px]
    ml-auto
    mr-auto
    text-center
`}
`;

const Img = styled.img`
  ${tw`
  ml-5
  mr-5
lg:ml-10
lg:mr-10
`}
`;

const ModalTitle = styled.h1`
  ${tw`
font-weight[900]
text-lg
lg:text-2xl

`}
`;

const Actions = styled.div`
  ${tw`
  flex
  justify-center
  `}
`;
const CancelButton = styled.button`
  ${tw`
    width[200px]
    border-2
    border-gray-700
    bg-gray-50
    text-gray-700
    mt-5
    border-radius[10px]
    hover:bg-gray-100
    hover:border-gray-900
    hover:text-gray-900
    `}
`;

const DeleteModal = ({ closeFn = () => null, open = false }) => {
  return (
    <ModalShell open={open}>
      <ModalMask>
        <ModalBody>
          <Header>
            <ModalTitle> This feature is not yet available </ModalTitle>
          </Header>
          <Img src={comingsoon} />
          <Actions>
            <CancelButton onClick={closeFn}> Ok, I'll wait! </CancelButton>
          </Actions>
        </ModalBody>
      </ModalMask>
    </ModalShell>
  );
};

export default DeleteModal;
