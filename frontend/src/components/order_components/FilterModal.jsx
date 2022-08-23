import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import FormikControl from "../formik_components/FormikControl";
import ModalShell from "../../ModalShell";
import { useAuth } from "../../utils/auth";

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
    position[fixed]
    width[400px]
    height[100vh]
    top[5%]
    left[0%]
    
    bg-white
    zIndex[1000]
   
    `}
`;
const formikStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const Header = styled.div`
  ${tw`
    flex
    justify-between
    align-items[center]
    padding[10px 20px 5px 10px]
    md:padding[20px 20px 5px 20px]
`}
`;

const ModalTitle = styled.h1`
  ${tw`
font-weight[900]
text-xl
md:text-3xl
`}
`;

const Button = styled(FaWindowClose)`
  ${tw` 
    font-size[30px]
    text-red-900
    hover:transform[scale(1.1)]
`}
`;

const SubmitButton = styled.button`
  ${tw`
    width[200px]
    border-2
    border-red-700
    bg-red-50
    text-red-700
    ml-2
    mr-2
    border-radius[10px]
    hover:bg-red-100
    hover:border-red-900
    hover:text-red-900
    `}
`;
const SubmitDiv = styled.div`
  ${tw`
flex
mt-0
lg:mt-5
justify-center
`}
`;

const spiceLevel = [
  { key: "Very Spicy", value: "4" },
  { key: "Spicy", value: "3" },
  { key: "Medium", value: "2" },
  { key: "Mild / None", value: "1" },
];

const dietaryRestriction = [
  { key: "Very Spicy", value: "4" },
  { key: "Spicy", value: "3" },
  { key: "Medium", value: "2" },
  { key: "Mild / None", value: "1" },
];

const dropdownOptions = [
  { key: "Select an option", value: "x" },
  { key: "Woman Owned", value: "woman" },
  { key: "Black Owned", value: "black" },
  { key: "Immigrant Owned", value: "immigrant" },
  { key: "Other", value: "other" },
];

const FilterModal = ({ closeFn = () => null, open = false }) => {
  const initialValues = {
    spiceLevel: "",
    dietaryRestrictions: "",
  };

  const onSubmit = async (values) => {
    closeFn();
    console.log("submitting form...");
    const { filters } = values;
  };

  return (
    <ModalShell open={open}>
      <ModalMask>
        <ModalBody>
          <Header>
            <ModalTitle> Filters </ModalTitle>
            <Button type="button" onClick={closeFn}></Button>
          </Header>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formik) => {
              return (
                <Form style={formikStyle}>
                  <FormikControl
                    control="select"
                    label="I identify as: "
                    name="identify"
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control="checkbox"
                    label="Spice Level"
                    name="spiceLevel"
                    options={spiceLevel}
                  />
                  <FormikControl
                    control="checkbox"
                    label="Dietary Restrictions"
                    name="dietaryRestrictions"
                    options={dietaryRestriction}
                  />
                  <SubmitDiv>
                    <SubmitButton onClick={closeFn}>Cancel</SubmitButton>
                    <SubmitButton type="submit">Apply</SubmitButton>
                  </SubmitDiv>
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </ModalMask>
    </ModalShell>
  );
};

export default FilterModal;
