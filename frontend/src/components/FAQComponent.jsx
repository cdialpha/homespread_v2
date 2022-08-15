import React, { useState, useRef, useEffect } from "react";
import "../styles/FAQStyles.css";
import { FiPlus } from "react-icons/fi";
import styled from "styled-components";
import tw from "twin.macro";

const QuestionContainer = styled.button`
  ${tw`
bg-transparent
border-4
border-gray-300
border-radius[8px]
shadow-md
cursor-pointer
font-size[17px]
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

const Icon = styled(FiPlus)`
  ${tw`
  cursor-pointer
  font-weight[900]
  font-size[30px]
  ml-5
  mr-4
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
    <QuestionContainer className={active} onClick={toggleAccordion}>
      <Question>
        {question}
        <Icon className={active ? `rotate` : null} />
      </Question>

      <div
        ref={contentRef}
        className={active ? `answer answer-divider` : `answer`}
      >
        <Answer>{answer}</Answer>
      </div>
    </QuestionContainer>
  );
};

export default FAQComponent;
