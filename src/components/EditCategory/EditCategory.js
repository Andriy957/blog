import React from 'react'; 
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from "react-redux";

import {api} from '../../utils';
import {register} from '../../constants';
import InputCategory from './InputCategory.js';
import {listRoute} from '../../constants';
import './styles.css';
import { closeModalEdit } from "../../actions/editList.js";

const EditCategory = (props) => {
    
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.filterListReducer.currentPage);
    const quantityElementPage = useSelector(state => state.filterListReducer.quantityElementPage);
    const sortAscDesc = useSelector(state => state.filterListReducer.sortAscDesc);
    const searchInput = useSelector(state => state.filterListReducer.searchInput);
    const numberIdEdit = useSelector(state => state.editListReducer.numberIdEdit);
    
    const {handleSubmit, values, handleChange, handleBlur, isSubmitting, setSubmitting} = useFormik({  
      initialValues: {
          title: '',
      },
        validateOnBlur: false,
        validateOnchange: false,
        onSubmit: async (formValues) => {
          setSubmitting(true);
          try {
              const data = await api(`${listRoute}/${numberIdEdit}`, {
                  method:'PUT',
                  body: JSON.stringify(formValues),
              });
              
          props.fetchData(currentPage, quantityElementPage, sortAscDesc, searchInput)(dispatch);
              
          } catch(e) { 
              console.error(e);
          } finally {
              setSubmitting(false);
          }   
       }  
    });
    
   return (
        
    <div className="formCategory">
    
        <span className="close" onClick={() => dispatch(closeModalEdit())}>&times;</span> 
       
      <form onSubmit={handleSubmit}>   
       <InputCategory
         label="title"
         id="title" 
         inputProps={{
           name:'title',
           value: values.title,
           onChange: handleChange,
           onBlur: handleBlur,
           disabled: isSubmitting,
       }}
       />
       
       <div className="formButtonCategory">
          <button type="submit" disabled={isSubmitting}>Edit</button>
       </div>
     </form>
   </div>
   );
};

export default EditCategory;
