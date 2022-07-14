import React from 'react'
import Footer from '../components/Footer'
import styled from "styled-components";
import tw from "twin.macro";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/registerStyles.css'
import { FaGoogle } from 'react-icons/fa'

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
    name: '',
    email: '',
    tos: '',
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    tos: Yup.boolean().required('Required')
})

const onSubmit = values => { 
    console.log('Form data', values)
};

const Register = () => {
  
    return (
    <> 
    <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount>

        {formik => {
            console.log('formik props:', formik);
            return (
            <RegContainer>
                <FormTitle> Sign up </FormTitle>
                <Form style={formikStyle}>
                    <div className='form-group'> 
                        <Field
                            className="form-control"
                            placeholder="Full Name"
                            type='text'
                            id='name'
                            name='name'
                            />
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <ErrorMessage name='name'> 
                        {(errorMsg) => <div className='error-msg'>{errorMsg}</div>}
                        </ErrorMessage>
                    </div> 
                    <br/>
                    <div className='form-group'>
                        <Field
                            className='form-control'
                            type='email'
                            placeholder="example@gmail.com"
                            id='email'
                            name='email' 
                            />
                        <label htmlFor="email" className="form-label">
                        Email
                        </label>
                            <ErrorMessage name='email'> 
                            { (errorMsg) => <div className='error-msg'>{errorMsg}</div>}
                            </ErrorMessage>
                    </div>
                    <div className='form-group check'>
                    <label htmlFor="tos"/>
                    <Field className='form-control' name='tos' type='checkbox' id='tos'/>
                    <span className='tos-text'> I agree to Boston Spread's Terms of Service, Privacy Policy and Content Policies </span> 
                    </div>
                <FormButton type='submit' disabled={!formik.isValid}> Create Account </FormButton>
                <div className='orDiv'>
                <span className='orSpan'> or </span></div> 
                <button className='google-button'>
                    <FaGoogle/> <span className='google-text'>Login with Google </span>
                </button>
                </Form>
            </RegContainer>       
            )}}
    </Formik>
    <Footer/>
    </>
  )
}

export default Register