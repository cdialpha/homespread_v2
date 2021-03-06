import React, {useEffect, useState, useContext} from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/registerStyles.css'
import { FaGoogle } from 'react-icons/fa'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../App';

const formikStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}
const RegContainer = styled.div`
${tw`
    flex
    flex-col
    border-4
    border-gray-200
    rounded-3xl
    justify-center
`};
    margin-top: 200px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
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
    name: '',
    email: '',
    tos: '',
    password: '',
    confirmPassword: '',
};
const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
})
const EmptyDiv = styled.div`
    height: 600px;
    display: block;
`


const Login = () => {
    
    const CurrentUser = useContext(UserContext);
    console.log(CurrentUser);

    // Form State
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("false");

    const navigate = useNavigate('/');
    
    const handleSubmit = async (values, onSubmitProps) => { 
        const {username, password} = values; 
        // console.log(values); 
        onSubmitProps.setSubmitting(false);
        try { 
        const config = { 
            headers: {"Content-type": "application/json"}
        }
        setLoading(true)
        const {data} = await axios.post('http://localhost:3002/register',
        { 
            username,
            password,
        },
        config);
        setLoading(false)
        navigate('/');    
        } catch (error) {
            setError(true);
        }
    };

    return (
    <>
    <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnMount
        >

        {formik => {
            // console.log('formik props:', formik);
            return (
            <RegContainer>
                <FormTitle> Log In </FormTitle>
                <Form style={formikStyle}>
                    <div className='form-group'> 
                        <Field
                            className="form-control"
                            placeholder="Username"
                            type='text'
                            id='username'
                            name='username'
                            
                            />
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <ErrorMessage name='username'> 
                        {(errorMsg) => <div className='error-msg'>{errorMsg}</div>}
                        </ErrorMessage>
                    </div> 
                    
                    <div className='form-group'>
                        <Field
                            className='form-control'
                            type='password'
                            placeholder="****"
                            id='password'
                            name='password' 
                            />
                        <label htmlFor="password" className="form-label">
                        Password
                        </label>
                            <ErrorMessage name='password'> 
                            { (errorMsg) => <div className='error-msg'>{errorMsg}</div>}
                            </ErrorMessage>
                    </div>

                <FormButton type='submit' disabled={!formik.isValid} > Log in </FormButton>
                <div className='orDiv'>
                <span className='orSpan'> or </span></div> 
                <button className='google-button'>
                    <FaGoogle/> <span className='google-text'>Login with Google </span>
                </button>
                </Form>
            </RegContainer>       
            )}}
    </Formik>
    <EmptyDiv/>
    </>
  )
}

export default Login