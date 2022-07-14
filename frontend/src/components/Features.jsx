import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import feature1 from "../images/feature1.png"
import feature2 from "../images/feature2.png"
import feature3 from "../images/feature3.jpeg"

const Container = styled.div`
${tw`
    grid
    pl-20
    pr-20
    pb-20
    `};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto; 
    row-gap: 2px;
    column-gap: 20px; 
`;

const FeatureImg = styled.img`
${tw`
    ml-auto
    mr-auto
    pl-1
    pr-1
    
`};
    height: 300px;
`;

const FeatureTitle = styled.div`
${tw`
    pt-10
    font-size[50px]
    font-weight[900]
    text-align[center]    
`};
`;

const FeatureDesc = styled.div`
${tw`
    pt-5
    max-w-2xl
    font-size[25px]
    font-weight[300]
    text-align[center]    
`};
`;


const Features = () => {
  return (
    <>
        <Container>
            <FeatureTitle> Plan </FeatureTitle>
            <FeatureTitle> Explore </FeatureTitle>
            <FeatureTitle> Connect </FeatureTitle>
            <FeatureImg src={feature1} alt="photo"/>
            <FeatureImg src={feature2} alt="photo"/>
            <FeatureImg src={feature3} alt="photo"/>
            <FeatureDesc> Meal prep your work week with coordinated delivery and a range of options</FeatureDesc>
            <FeatureDesc> Taste dishes you won't find in the restaurant, and from every corner of the Globe </FeatureDesc>
            <FeatureDesc> Learn about Boston's diversity and connect with your neighbors</FeatureDesc>
        </Container>
    </>
  )
}

export default Features