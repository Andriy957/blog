import React from 'react'; 
import { useRef } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { useEffect } from 'react';

import {apiImage} from '../../utils/apiImage.js';
import {api} from '../../utils/api.js';
import {listRoute} from '../../constants';
import {imageRoute} from '../../constants';
import SelectCategory from '../SelectCategory/SelectCategory.js';
import './styles.css';
import { closeModalAddPost } from "../../actions/editPost.js";

const AddPost = (props) => {
    
    const dispatch = useDispatch();
    const category = useSelector(state => state.editImageReducer.category);
    const currentPage = useSelector(state => state.filterImageReducer.currentPage);
    const quantityElementPage = useSelector(state => state.filterImageReducer.quantityElementPage);
    const sortAscDesc = useSelector(state => state.filterImageReducer.sortAscDesc);
    const searchInput = useSelector(state => state.filterImageReducer.searchInput);
    const formRef = useRef();
  
    const handleSubmit = async (event) => {
       const data = new FormData(formRef.current);
       data.append('category_id', category);
       event.preventDefault();
          try {
              const response = await apiImage(`${imageRoute}`, {
                 method: 'POST',
                 body: data,    
              }); 
              props.fetchDataPost(currentPage, quantityElementPage, sortAscDesc, searchInput)(dispatch);
          } catch(e) { 
              console.error(e);
          }   
    };
    
   return (
     <div className="formImage">
        <form onSubmit={handleSubmit} ref={formRef}>
          <span className="close" onClick={() => dispatch(closeModalAddPost())}>&times;</span> 
       
          <input className="input-title" type="text" name="title"/>
          <SelectCategory />
          <input className="input-description" type="text" name="description"/>
          <input type="file" name="image" accept="image/*"/>
        <div className="formButtonImage">
            <button type="submit">Add</button>
        </div>

       </form>
   </div>
   );
};

export default AddPost;