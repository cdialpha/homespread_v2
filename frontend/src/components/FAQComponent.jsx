import React, { useState, useRef, useEffect } from "react";
import "../styles/FAQStyles.css";
import { FiPlus } from "react-icons/fi";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.button`
  ${tw`
bg-transparent
border-4
border-gray-300
border-radius[8px]
shadow-md
cursor-pointer
font-size[30px]
width[100%]
max-width[1000px]
ml-auto
mr-auto
`}
`;
const QuestionContainer = styled.div`
  ${tw`
flex
justify-between
`}
`;
const Question = styled.div`
  ${tw`
  flex
  align-items[center]
  text-align[left]
  min-height[10px]
  pl-5
  pt-2
  pb-2
`}
`;

const Icon = styled.div`
  ${tw`
  cursor-pointer
  font-weight[900]
  font-size[30px]
  mt-auto
  mb-auto
  mr-2
  ml-5
`}
`;

const Answer = styled.p`
  ${tw`
pl-5
pt-2
pb-2
`}
`;

const FAQComponent = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <Container className={active} onClick={toggleAccordion}>
      <QuestionContainer>
        <Question>{question}</Question>
        <Icon>
          <FiPlus className={active ? `rotate` : null} />
        </Icon>
      </QuestionContainer>
      <div
        ref={contentRef}
        className={active ? `answer answer-divider` : `answer`}
      >
        <Answer>{answer}</Answer>
      </div>
    </Container>
  );
};

export default FAQComponent;
