import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
${tw`
    width[80vw]
    flex
    flex-col
    ml-auto
    mr-auto
    mt-20
`}
`

const MissionTitle = styled.div`
${tw`
    text-2xl
    font-weight[900]
`}`;

const MissionP = styled.div`
${tw`
    mt-5
`}`;

const EmphasisTitle = styled.div`
${tw`
    mt-10
    mb-10
    text-green-600
    font-weight[900]
    text-2xl
`}
`

const Mission = () => {
  return (
    <Container>
    <MissionTitle> Connecting Boston </MissionTitle>
    <MissionP> 
    Our mission is to connect hard working families to people who enjoy cuisine from around the world. Boston has more than 690,000 residents. In the City, 29% of our population is foreign-born and many are the children of immigrants. Boston Spread's mission is to foster and support food entrepreneurs in Massachusetts and to create sustainable food jobs for low-income Boston residents. Boston Spread aims to bridge communities through food, cooking, and entrepreneurship. The Cambridge Food Lab also explores, uses, supports, and promotes new clean and environmentally friendly food technologies, ingredients, and devices.
    </MissionP>

    <MissionP> 
    Early in 2021, Boston's City Council voted to allow Boston Home Cooks the opportunity to start selling their home-cooked foods. Home cooks are now able to sell cottage foods that are non-perishable, or that do not spoil easily. This includes cakes, pastries, fruit pies, dried fruits, and pasta. Although laws in Massachusetts allow home cooks to offer foods that are considered to be shelf-stable, the local communities are able to create their own set of rules and regulations
    </MissionP> 
    <EmphasisTitle> 
    Women account for only 33% of business owners nationwide and still make 46-75 cents for every dollar their white, male counterparts make.
    </EmphasisTitle>
    <MissionTitle>
    One Stop Shop for Resources    
    </MissionTitle>
    <MissionP> 
    We partner with small business incubators around Boston. Teach aspiring entrepreurs how to market themselves.
    In 2018 the Boston Spread partnered with the Healthy Chelsea Coalition, a community health coalition managed by Massachusetts General Hospital, to offer a food literacy program that introduces healthy cooking techniques to immigrant communities while considering their native cultural and food consuming characteristics. 
 
    </MissionP>
    </Container> 
  )
}

export default Mission