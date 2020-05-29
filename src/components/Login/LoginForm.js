import React from 'react'; 
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import SignupInput from '../Signup/SignupInput/SignupInput';
import Header from "../Header/Header";
import {api} from '../../utils';
import './styles.css';

const LoginForm = () => {
    
    const history = useHistory();
    
    const {handleSubmit, values, handleChange, errors, handleBlur, isSubmitting, setSubmitting} = useFormik({  
      initialValues: {
          username: '',
          password: '',
      },
        validateOnBlur: false,
        validateOnchange: false,
        validationSchema: yup.object().shape({ 
          username: yup.string()      
           .required('This field is required'),
          password: yup.string()
           .required('This field is required')
           .min(6, 'This password is too short')
           .max(30, 'This passwors is too long'),
      }),  
        
      onSubmit: async (formValues) => {
          setSubmitting(true);
          try {
              const res = await api('api/auth/login', {
                  method:'POST',
                  body: JSON.stringify(formValues)
              });
              const token = res.token.token;   
              localStorage.setItem('myToken', token); 
              history.push("/home"); 
          } catch(e) {
              console.error(e);
          } finally {
              setSubmitting(false);
          }   
      },  
    });
    
   return (
    <div>
     <Header />
     <div className="form">
       <form onSubmit={handleSubmit}>   
        <SignupInput
         label="username"
         id="username" 
         inputProps={{
           name:'username',
           value: values.username,
           onChange: handleChange,
           onBlur: handleBlur,
           disabled: isSubmitting,
       }}
       error={errors.username}
       />
       
       <SignupInput
         label="password"
         id="password" 
         inputProps={{
           name:'password',
           value: values.password,
           onChange: handleChange,
           onBlur: handleBlur,
           type:'password',
           disabled: isSubmitting,
       }}
       error={errors.password}
       />
       
       <div className="form-button">
           <button type="submit" disabled={isSubmitting}>Submit Form</button>
       </div>
      </form>
     </div>
    </div>
   );
};

export default LoginForm;

