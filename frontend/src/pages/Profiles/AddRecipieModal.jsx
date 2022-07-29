import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import tw from "twin.macro";
import "../../styles/formStyles.css";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/formik_components/FormikControl";
import { useAuth } from "../../utils/auth";
import FileUpload from "./FileUpload";
import axios from "axios";

const MODAL_OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: 1000,
};

const Modal = styled.div`
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
  height: 750px;
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

const Button = styled(FaWindowClose)`
  ${tw` 
    hover:to-red-600
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
    mt-1
    border-radius[10px]
    hover:bg-red-100
    hover:border-red-900
    hover:text-red-900
    `}
`;

const AddRecipieModal = ({ open, children, onClose }) => {
  const gets3 = useAuth().getS3URL;
  const user = useAuth().user;
  if (!open) return null;

  const checkboxOptions = [
    { key: "Vegan", value: "vegan" },
    { key: "Vegetarian", value: "vegetarian" },
    { key: "Dairy Free", value: "dairyfree" },
    { key: "Gluten Free", value: "glutenfree" },
  ];
  const initialValues = {
    dish: "",
    description: "",
    size: "",
    ingredients: "",
    allergens: "",
    special: [],
  };
  const validationSchema = Yup.object({
    dish: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    size: Yup.string().required("Required"),
    ingredients: Yup.string().required("Required"),
    allergens: Yup.string().required("Required"),
    special: Yup.array(),
  });

  const onSubmit = async ({ values, onSubmitProps }) => {
    // get secure url to post to s3 bucket
    const s3uploadUrl = gets3();
    console.log(s3uploadUrl);

    onSubmitProps.setSubmitting(false);

    // send data to mongodb
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    const {
      attachment,
      dish,
      description,
      size,
      ingredients,
      allergens,
      special,
    } = values;

    const config = { headers: { "Content-type": "application/json" } };

    const { addRecipieData } = await axios
      .post(
        `http://localhost:3002/${user}/recipies`,
        {
          dish,
          description,
          size,
          ingredients,
          allergens,
          special,
        },
        config
      )
      .then(console.log("success!", addRecipieData));
  };

  return ReactDom.createPortal(
    <div style={MODAL_OVERLAY_STYLES}>
      <Modal>
        <Header>
          <ModalTitle> Add a dish </ModalTitle>
          <Button onClick={onClose}></Button>
        </Header>
        <RegContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form className="form">
                <FormikControl
                  control="input"
                  type="text"
                  label="Dish Name"
                  name="dish"
                  placeholder="dish"
                />

                <Field
                  id="attachment"
                  name="attachment"
                  component={FileUpload}
                />

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
                <FormikControl
                  control="checkbox"
                  label="Special"
                  name="special"
                  options={checkboxOptions}
                />

                <SubmitButton type="submit" user={user}>
                  Submit
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </RegContainer>
      </Modal>
    </div>,
    document.getElementById("portal")
  );
};

export default AddRecipieModal;
