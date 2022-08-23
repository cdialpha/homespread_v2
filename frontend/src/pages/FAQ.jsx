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
    A: "At the state level, cottage food laws determine whether you're allowed to make certain types of food from your home kitchen to then sell at certain types of venues. Unofficial online resources like Forrager.com may be helpful, but consult a local legal professional with questions.",
  },
  {
    id: "3C",
    Q: "Are there any fees to sell?",
    A: "Boston Spread provides a free platform to sell your product. We encourage users to coordinate payment with their customers using 3rd party apps. However, should you choose, we do provide payment processing via stripe, where a 3% charge will be addded to the customers payment.",
  },
  {
    id: "4C",
    Q: "How does Boston Spread protect it's chefs?",
    A: "Seller Protection is a program that offers you peace of mind in the event of a transaction dispute. If you are unable to resolve a disagreement with a buyer and the transaction meets eligibility requirements, Boston Spread will help you resolve the issue through our dispute resolution system.",
  },
  {
    id: "5C",
    Q: "Do I need a bank account or credit card to sell on Boston Spread?",
    A: "No, a credit or debit card is not required to create a shop. To be verified as a seller you have the choice to use either a credit card or to register via PayPal. You will not incur any charges until you open your shop and publish your listings.",
  },
  {
    id: "6C",
    Q: "What if I don't have the space at home to make dishes?",
    A: "Thinking about setting up shop in your home? First, research the zoning laws in your area to see if you are allowed to do so. Not all states in the U.S. require you to have your kitchen inspected, but it's a good idea to do so. (Learn more about the rules governing inspections and ingredients in your state at CottageFood.org.) You should also think about how you'll store your ingredients and finished products, considering both refrigerated and dry storage. If you’ve got big dreams of stocking the shelves of specialty gourmet stores around the country, operating out of a commercial kitchen is the route for you. Commercial workspaces can be a great resource for start-up food businesses, since they give you access to large (i.e. expensive) kitchen equipment for an affordable price. With the local and artisanal food movement on the rise, incubator and catering kitchens are popping up all over the country. Check out this kitchen incubator map to see some options. Some churches, schools and restaurants also allow access to use their commercial kitchens during off-hours. Be sure to research requirements related to operating out of a commercial kitchen, including facility permits and insurance.",
  },
  {
    id: "7C",
    Q: "What Lisences and Permits do I need?",
    A: "Next, you’ll need to get all your licensing and permits in order. Check your local and state regulations for the specifics, but you may need a business license, a food handler's license for each person making and packaging your shop's food and a temporary food service establishment permit (if you'll be selling at a fair or flea market). You may also need a home or commercial kitchen inspection, most likely from your state's Department of Health, and insurance that covers basic liability.",
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
