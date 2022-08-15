import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    width[80vw]
    flex
    flex-col
    ml-auto
    mr-auto
    mt-5
    mb-10
`}
`;

const MissionTitle = styled.div`
  ${tw`
    text-2xl
    font-weight[900]
    mt-10
`}
`;

const MissionP = styled.div`
  ${tw`
    mt-5
`}
`;

const EmphasisText = styled.div`
  ${tw`
    mt-10
    text-green-600
    font-weight[900]
    text-2xl
`}
`;

const Mission = () => {
  return (
    <Container>
      <MissionTitle> Connecting Boston </MissionTitle>
      <MissionP>
        Our mission is to connect hard working families to people who enjoy
        cuisine from around the world. Boston has more than 690,000 residents.
        In the City, 29% of our population is foreign-born and many are the
        children of immigrants. Boston Spread's mission is to foster and support
        food entrepreneurs in Massachusetts and to create sustainable food jobs
        for low-income Boston residents. Boston Spread aims to bridge
        communities through food, cooking, and entrepreneurship. The Cambridge
        Food Lab also explores, uses, supports, and promotes new clean and
        environmentally friendly food technologies, ingredients, and devices.
      </MissionP>

      <MissionP>
        Early in 2021, Boston's City Council voted to allow Boston Home Cooks
        the opportunity to start selling their home-cooked foods. Home cooks are
        now able to sell cottage foods that are non-perishable, or that do not
        spoil easily. This includes cakes, pastries, fruit pies, dried fruits,
        and pasta. Although laws in Massachusetts allow home cooks to offer
        foods that are considered to be shelf-stable, the local communities are
        able to create their own set of rules and regulations
      </MissionP>
      <EmphasisText>
        Women account for only 33% of business owners nationwide and still make
        46-75 cents for every dollar their white, male counterparts make.
      </EmphasisText>
      <MissionTitle>One Stop Shop for Resources</MissionTitle>
      <MissionP>
        We partner with small business incubators around Boston. Teach aspiring
        entrepreurs how to market themselves. In 2018 the Boston Spread
        partnered with the Healthy Chelsea Coalition, a community health
        coalition managed by Massachusetts General Hospital, to offer a food
        literacy program that introduces healthy cooking techniques to immigrant
        communities while considering their native cultural and food consuming
        characteristics.
      </MissionP>

      <MissionTitle>Myths about cottage food abound</MissionTitle>
      <MissionP>
        Here are the facts: Cottage food is safe. Critics who talk about the
        risk of food-borne illness give hypothetical examples of what could go
        wrong because real-world cases are rare or nonexistent. Cottage food is
        local. When neighbors trade with neighbors, money stays in the local
        economy. Cottage food is transparent. People who buy from a cottage food
        producer know what they get. If they have questions about ingredients,
        sourcing or safety, they can ask. Cottage food creates jobs. Many
        homemade food producers use their income to provide for their families.
        Others seek a secondary or supplemental income. Cottage food empowers
        women. IJ cottage food research shows that most cottage food producers
        are women, and many live in rural areas with limited economic
        opportunity. Cottage food expands consumer choice. Some stores simply do
        not sell what you want. This is especially true if you have a
        gluten-free, peanut-free, halal, kosher or vegan diet. Cottage food
        fills market gaps, giving consumers more options. As part of its Food
        Freedom Initiative, the Institute for Justice provides a variety of
        resources for home bakers and other food entrepreneurs. These include:
        Model Food Freedom Act from the Institute for Justice guides activism
        efforts at state capitols nationwide. Flour Power: How Cottage Food
        Entrepreneurs Are Using Their Home Kitchens to Become Their Own Bosses
        surveys 775 cottage food producers in 22 states about what their
        businesses mean to them. Ready to Roll highlights nine lessons from the
        Institute for Justice’s cottage food victory in Wisconsin. The Attack on
        Food Freedom examines the impact of regulations on farmers, chefs
        artisans, restaurateurs, food truck operators and others.
      </MissionP>
    </Container>
  );
};

export default Mission;
