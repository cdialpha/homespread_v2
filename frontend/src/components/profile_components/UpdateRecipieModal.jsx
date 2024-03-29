import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaWindowClose } from "react-icons/fa";
import ModalShell from "../../ModalShell";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../formik_components/FormikControl";
import { useAuth } from "../../utils/auth";
import FileUpload from "./FileUpload";
import axios from "axios";
import api from "../../api/api";

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

const CloseButton = styled(FaWindowClose)`
  ${tw` 
    hover:to-red-600
`}
`;

const RegContainer = styled.div`
  ${tw`
    flex
    flex-col
    border-4
    border-gray-200
    rounded-3xl
    justify-around
    width[380px]
    md:width[500px]
`};
  margin-top: 5px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  height: 1000px;
`;

const Header = styled.div`
  ${tw`
    flex
    justify-between
    align-items[center]
    padding[20px]
`}
`;

const ModalTitle = styled.h1`
  ${tw`
font-weight[900]
text-3xl
`}
`;

const SubmitButton = styled.button`
  ${tw`
    width[200px]
    border-2
    border-red-700
    bg-red-50
    text-red-700
    ml-auto
    mr-auto
    mt-5
    border-radius[10px]
    hover:bg-red-100
    hover:border-red-900
    hover:text-red-900
    `}
`;

const BottomHalf = styled.div`
  ${tw`
flex
justify-between
`}
`;
const StackedItems = styled.div`
  ${tw` 
flex
flex-col
mr-5
`}
`;

const UpdateRecipieModal = ({
  closeFn = () => null,
  open = false,
  payload,
}) => {
  if (payload.length) payload = JSON.parse(payload);
  const user = useAuth().user;
  const [images, setImageValues] = useState([]);

  const checkboxOptions = [
    { key: "Vegan", value: "vegan" },
    { key: "Vegetarian", value: "vegetarian" },
    { key: "Dairy Free", value: "dairyfree" },
    { key: "Gluten Free", value: "glutenfree" },
  ];

  const initialValues = {
    dish: payload.dish_name,
    description: payload.dish_description,
    size: payload.serving_size,
    ingredients: payload.ingredients,
    allergens: payload.allergens,
    special: payload.special,
    price: payload.price,
    tags: payload.tags,
  };

  const onSubmit = async (values) => {
    closeFn();
    const recipieId = payload._id;
    const updatedRecipie = api.updateRecipie(recipieId, values);
  };

  return (
    <ModalShell open={open}>
      <ModalMask>
        <ModalBody>
          <Header>
            <ModalTitle> UPDATE RECIPIE </ModalTitle>
            <CloseButton onClick={closeFn}></CloseButton>
          </Header>
          <RegContainer>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {(formik) => (
                <Form className="form">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Dish Name"
                    name="dish"
                    placeholder="dish"
                  />
                  {/* <Field
                    id="attachment"
                    name="attachment"
                    setImageValues={setImageValues}
                    component={FileUpload}
                  /> */}
                  <FormikControl
                    control="textarea"
                    label="Description"
                    name="description"
                    palceholder="some text placeholder"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Serving Size"
                    name="size"
                    placeholder="size"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Ingredients"
                    name="ingredients"
                    placeholder="ingredients"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Potential Allergens"
                    name="allergens"
                    placeholder="allergens"
                  />
                  <BottomHalf>
                    <FormikControl
                      control="checkbox"
                      label="Special"
                      name="special"
                      options={checkboxOptions}
                    />
                    <StackedItems>
                      {" "}
                      <FormikControl
                        control="input"
                        type="text"
                        label="Price"
                        name="price"
                        placeholder="ingredients"
                      />
                      <FormikControl
                        control="input"
                        type="text"
                        label="Tags"
                        name="tags"
                        placeholder="tags"
                      />
                    </StackedItems>
                  </BottomHalf>
                  <SubmitButton type="submit" user={user}>
                    Update
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </RegContainer>
        </ModalBody>
      </ModalMask>
    </ModalShell>
  );
};

export default UpdateRecipieModal;
