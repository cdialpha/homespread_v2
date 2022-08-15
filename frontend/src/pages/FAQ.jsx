import React from "react";
import "../styles/FAQStyles.css";
import styled from "styled-components";
import tw from "twin.macro";
import FAQComponent from "../components/FAQComponent";

const View = styled.div`
  ${tw`
  height[auto]
  pb-20
`}
`;

const Container = styled.div`
  ${tw`
  flex
  flex-col
  height[80%]
  width[80%]
  
  ml-auto
  mr-auto
  `}
`;

const FAQHeader = styled.h1`
  ${tw`
font-weight[900]
font-size[x-large]
border-b-4
mt-10
`}
`;

const FAQContainer = styled.div`
  ${tw`
height[200]
mt-5

`}
`;

const userQuestions = [
  {
    id: "1U",
    Q: "Can I order from Boston Spread outside of the Greater Boston Area?",
    A: "1Because!",
  },
  {
    id: "2U",
    Q: "What if I get sick? How do I know my food was prepared safely?",
    A: "3Because!",
  },
  {
    id: "3U",
    Q: "How do I get my food after it's ordered?",
    A: "2Because!",
  },
  {
    id: "4U",
    Q: "3Why do you like web deawdawsd sf awerd awd awd awd asd asd awd awd asd aw dasd awd aw dawd velopemntawd awd awd awd awd",
    A: "3Because!",
  },
  {
    id: "5U",
    Q: "When I got my food it was not what I expected",
    A: "2Because!",
  },
  {
    id: "6U",
    Q: "I have very severe allergies to XYZ. How do I know my food was prepared in a safe manner? ",
    A: "2Because!",
  },
];

const chefQuestions = [
  {
    id: "1C",
    Q: "Can I sell on the Boston Spread platform if I live outside of Boston?",
    A: "1Because!",
  },
  {
    id: "2C",
    Q: "What food am I allowed to sell?",
    A: "2Because!",
  },
  {
    id: "3C",
    Q: "Can I sell xyz?",
    A: "3Because!",
  },
  {
    id: "4C",
    Q: "Are there any fees to sell?",
    A: "3Because!",
  },
  {
    id: "5C",
    Q: "How does Boston Spread protect it's chefs?",
    A: "Seller Protection is a program that offers you peace of mind in the event of a transaction dispute. If you are unable to resolve a disagreement with a buyer and the transaction meets eligibility requirements, Boston Spread will help you resolve the issue through our dispute resolution system.",
  },
  {
    id: "6C",
    Q: "Do I need a bank account or credit card to sell on Boston Spread?",
    A: "No, a credit or debit card is not required to create a shop. To be verified as a seller you have the choice to use either a credit card or to register via PayPal. You will not incur any charges until you open your shop and publish your listings.",
  },
  {
    id: "6C",
    Q: "What if I don't have the space at home to make dishes?",
    A: "No, a credit or debit card is not required to create a shop. To be verified as a seller you have the choice to use either a credit card or to register via PayPal. You will not incur any charges until you open your shop and publish your listings.",
  },
];

const FAQ = () => {
  return (
    <View>
      <Container>
        <FAQHeader> User FAQs </FAQHeader>
        <FAQContainer>
          {userQuestions.map((item) => (
            <FAQComponent key={item.id} question={item.Q} answer={item.A} />
          ))}
        </FAQContainer>

        <FAQHeader> Chef FAQs </FAQHeader>
        <FAQContainer>
          {chefQuestions.map((item) => (
            <FAQComponent key={item.id} question={item.Q} answer={item.A} />
          ))}
        </FAQContainer>
      </Container>
    </View>
  );
};

export default FAQ;
