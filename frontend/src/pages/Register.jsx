import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/formStyles.css";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

const formikStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
const RegContainer = styled.div`
  ${tw`
    flex
    flex-col
    border-4
    border-gray-200
    rounded-3xl
    justify-center
`};
  margin-top: 100px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  height: 700px;
  width: 500px;
`;
const FormTitle = styled.div`
  ${tw`
    text-3xl
    ml-auto
    mr-auto
`};
`;
const FormButton = styled.button`
  ${tw`
    pt-2
    pb-2
    mt-10
    ml-auto
    mr-auto
    border-2
    rounded-md
    border-black
    width[80%]
    text-white
    bg-red-900
    disabled:bg-gray-100
    disabled:text-gray-400
    disabled:border-gray-300
    transition[0.5s]
`}
`;
const initialValues = {
  username: "",
  email: "",
  tos: "",
  password: "",
  confirmPassword: "",
};

const EmptyDiv = styled.div`
  height: 600px;
  display: block;
`;

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  tos: Yup.boolean().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), ""], "Passwords must match"),
});

const Register = () => {
  const auth = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("false");
  const navigate = useNavigate();

  const handleSubmit = async (values, onSubmitProps) => {
    console.log("handle submit", error, loading, values);
    onSubmitProps.setSubmitting(false);
    setLoading(true);
    try {
      auth.register(values);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
    navigate("/");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {(formik) => {
          // console.log('formik props:', formik);
          return (
            <RegContainer>
              <FormTitle> Sign up </FormTitle>
              <Form style={formikStyle}>
                <div className="form-group">
                  <Field
                    className="form-control"
                    placeholder="User Name"
                    type="text"
                    id="username"
                    name="username"
                  />
                  <label htmlFor="username" className="form-label">
                    Full Name
                  </label>
                  <ErrorMessage name="username">
                    {(errorMsg) => <div className="error-msg">{errorMsg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    className="form-control"
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    name="email"
                  />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <ErrorMessage name="email">
                    {(errorMsg) => <div className="error-msg">{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-group">
                  <Field
                    className="form-control"
                    type="password"
                    placeholder="****"
                    id="password"
                    name="password"
                  />
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <ErrorMessage name="password">
                    {(errorMsg) => <div className="error-msg">{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-group">
                  <Field
                    className="form-control"
                    type="password"
                    placeholder="****"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <ErrorMessage name="confirmPassword">
                    {(errorMsg) => <div className="error-msg">{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-group check">
                  <label htmlFor="tos" />
                  <Field
                    className="form-control"
                    name="tos"
                    type="checkbox"
                    id="tos"
                  />
                  <span className="tos-text">
                    {" "}
                    I agree to Boston Spread's Terms of Service, Privacy Policy
                    and Content Policies{" "}
                  </span>
                </div>
                <FormButton type="submit" disabled={!formik.isValid}>
                  {" "}
                  Create Account{" "}
                </FormButton>
                <div className="orDiv">
                  <span className="orSpan"> or </span>
                </div>
                <button className="google-button">
                  <FaGoogle />{" "}
                  <span className="google-text">Login with Google </span>
                </button>
              </Form>
            </RegContainer>
          );
        }}
      </Formik>
      <EmptyDiv />
    </>
  );
};

export default Register;
