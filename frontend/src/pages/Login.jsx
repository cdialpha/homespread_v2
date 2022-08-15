import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/formStyles.css";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Link } from "react-router-dom";
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
    margin-top[200px]
    mb-auto
    ml-auto
    mr-auto
    height[500px]
    width[400px]
`};
`;

const Header = styled.div`
  ${tw`
flex
justify-between
`}
`;
const FormTitle = styled.div`
  ${tw`
    text-3xl
    font-weight[900]
  ml-10
    mb-5
`};
`;

const RegisterButton = styled.button`
  ${tw`
font-weight[900]
height[45px]
border-2
border-black
border-radius[35px]
pl-3
pr-3
pt-1
pb-1
mr-7
text-black

`}
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
  password: "",
};
const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
const EmptyDiv = styled.div`
  height: 600px;
  display: block;
`;

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate("/");

  // Form State
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("false");

  const handleSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    setLoading(true);
    try {
      auth.login(values);
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
              <Header>
                <FormTitle> Log In </FormTitle>
                <Link to="/register">
                  <RegisterButton>Register</RegisterButton>
                </Link>
              </Header>
              <Form style={formikStyle}>
                <div className="form-group">
                  <Field
                    className="form-control"
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username"
                  />
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <ErrorMessage name="username">
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

                <FormButton type="submit" disabled={!formik.isValid}>
                  Log in
                </FormButton>
                <div className="orDiv">
                  <span className="orSpan"> or </span>
                </div>
                <button className="google-button">
                  <FaGoogle />
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

export default Login;
