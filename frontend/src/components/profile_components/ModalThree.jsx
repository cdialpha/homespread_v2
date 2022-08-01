import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaWindowClose } from "react-icons/fa";
import ModalShell from "../../ModalShell";

const ModalMask = styled.div`
  ${tw`
  fixed
  top[0px]
  bottom[0px]
  left[0px]
  right[0px]
  z-10
  `}
  backgroundColor: "rgba(0,0,0,0.8)",
`;

const ModalBody = styled.div`
  ${tw`
    flex
    flex-col
    position[fixed]
    width[400px]
    height[750px]
    border-radius[10px]
    md:width[600px]
    md:height[900px]
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
`}
`;

const Button = styled(FaWindowClose)`
  ${tw` 
    hover:to-red-600
`}
`;

const ModalThree = ({ closeFn = () => null, open = false }) => {
  return (
    <ModalShell open={open}>
      <ModalMask>
        <ModalBody>
          <Header>
            Modal Three
            <Button onClick={closeFn}></Button>
          </Header>
        </ModalBody>
      </ModalMask>
    </ModalShell>
  );
};

export default ModalThree;
