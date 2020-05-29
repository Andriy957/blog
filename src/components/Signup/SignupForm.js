import React from 'react'; 
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SignupInput from './SignupInput/SignupInput';
import {api} from '../../utils';
import {registerRoute} from '../../constants';
import './styles.css';

const SignupForm = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.registerReducer.errorMessage);
    
    const {handleSubmit, values, handleChange, errors, handleBlur, isSubmitting, setSubmitting} = useFormik({  
      initialValues: {
          username: '',
          password: '',
          confirm_password: '',
          first_name: '',
          last_name: '',
          phone:''
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
            confirm_password: yup.string()
        .oneOf([yup.ref('password'), null], 'Password are not matched')    
        .required('This field is required'),  
            first_name: yup.string()      
           .required('This field is required'),
            last_name: yup.string()      
           .required('This field is required'),
           phone: yup.string()      
           .required('This field is required'),
      }),  
      onSubmit: async (formValues) => {
          setSubmitting(true);
          try {
                dispatch({ type: "LOAD_DATA_ERROR_START" }); 
                  const data = await api(`${registerRoute}`, {
                  method:'POST',
                  body: JSON.stringify(formValues)
              });
              if (Array.isArray(data)){              
                dispatch({ type: "LOAD_DATA_ERROR_END", payload: data });                
              } else {
                 const token = data.token.token;   
                 localStorage.setItem('myToken', token);     
                 history.push("/home");
             }
          } catch(e) { 
              console.error(e);
          } finally {
              setSubmitting(false);
          }   
       },  
    });
    
   return (
        
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
       { errorMessage && <p className='errorMessage'>{errorMessage}</p> }
       
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
       
       <SignupInput
         label="сonfirm password"
         id="confirm_password" 
         inputProps={{                
           name:'confirm_password',
           value: values.confirm_password,
           onChange: handleChange,
           onBlur: handleBlur,
           type:'password',
           disabled: isSubmitting,
       }}
      error={errors.confirm_password}
       />
     <SignupInput
         label="first_name"
         id="first_name" 
         inputProps={{                
           name:'first_name',
           value: values.first_name,
           onChange: handleChange,
           onBlur: handleBlur,
           disabled: isSubmitting,
       }}
       error={errors.first_name}
       />
       
        <SignupInput
         label="last_name"
         id="last_name" 
         inputProps={{                
           name:'last_name',
           value: values.last_name,
           onChange: handleChange,
           onBlur: handleBlur,
           disabled: isSubmitting,
       }}
       error={errors.last_name}
       />
       
        <SignupInput
         label="phone"
         id="phone" 
         inputProps={{                
           name:'phone',
           value: values.phone,
           onChange: handleChange,
           onBlur: handleBlur,
           disabled: isSubmitting,
       }}
       error={errors.phone}
       />
       
       <div className="form-button">
          <button type="submit" disabled={isSubmitting}>Submit Form</button>
       </div>
     </form>
   </div>
   );
};

export default SignupForm;