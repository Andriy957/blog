import React from "react";
import {Redirect} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header";
import './styles.css';
import {api} from '../../utils';
import {listRoute} from '../../constants';
import SignupInput from '../Signup/SignupInput/SignupInput';
import Table from "../Table/Table.js";
import Search from '../Search/Search.js';
import AddCategory from '../EditCategory/AddCategory.js';
import EditCategory from '../EditCategory/EditCategory.js';
import DeleteCategory from '../EditCategory/DeleteCategory.js';
import DeleteСoupleСategory from '../EditCategory/DeleteСoupleСategory.js';
import { changePage, changeQuantityElementPage } from "../../actions/filterList.js";
import { modalAddCategory, modalDeleteCoupleCategory } from "../../actions/editList.js";

const Categories = () => {
    
  const dispatch = useDispatch();
    
  const listCategory = useSelector(state => state.filterListReducer.listCategory);
  const currentPage = useSelector(state => state.filterListReducer.currentPage);
  const quantityElementPage = useSelector(state => state.filterListReducer.quantityElementPage);
  const sortAscDesc = useSelector(state => state.filterListReducer.sortAscDesc);
  const searchInput = useSelector(state => state.filterListReducer.searchInput);
  const buttonsPagination = useSelector(state => state.filterListReducer.buttonsPagination);
  const buttonsQuantityElementPage = useSelector(state => state.filterListReducer.buttonsQuantityElementPage);
  const isOpenedEdit = useSelector(state => state.editListReducer.isOpenedEdit);  
  const isOpenedDelete = useSelector(state => state.editListReducer.isOpenedDelete);  
  const isOpenedAdd = useSelector(state => state.editListReducer.isOpenedAdd);
  const isOpenedCoupleDelete = useSelector(state => state.editListReducer.isOpenedCoupleDelete);
    
useEffect(() => {
         fetchData(currentPage, quantityElementPage, sortAscDesc, searchInput)(dispatch);
  }, [currentPage, quantityElementPage, sortAscDesc, searchInput]);

    function fetchData(valuePage, valueElement, valueSort, valueFilter) {
      return async (dispatch) => {
        try {
          dispatch({ type: "LOAD_DATA_START" }); 
             const data = await api(`${listRoute}?page=${valuePage}&limit=${valueElement}&order=${valueSort}&q=${valueFilter}`, {
               method: 'GET',
             }); 
          dispatch({ type: "LOAD_DATA_END", payload: data }); 
      } catch (e) {
         console.error(e);
      }
     };
    }

  return (
    <div>
      
      <Header />
      <Search />

       <div className="button-elements">    
           {[...Array(buttonsQuantityElementPage)].map((item, index) => (                  
             <button onClick={() => dispatch(changeQuantityElementPage(index + 2))}>
                Elements: {index + 2}
             </button>
           ))}
       </div>

      <Table dataAttribute={listCategory} />
              
      <div className="button-pagination">
           {[...Array(buttonsPagination)].map((item, index) => (
              <button onClick={() => dispatch(changePage(index + 1))}>{index + 1}</button>
           ))}
      </div>

     <button type="button" className="addCategoryButton" 
        onClick={() => dispatch(modalAddCategory())}>Add Category
     </button>

     <button type="button" className="deleteCategoryButton" 
        onClick={() => dispatch(modalDeleteCoupleCategory())}>Delete Category
     </button>

         {isOpenedEdit && <EditCategory fetchData={fetchData} />}
         {isOpenedDelete && <DeleteCategory fetchData={fetchData} />}
         {isOpenedAdd && <AddCategory fetchData={fetchData} />}                            
         {isOpenedCoupleDelete && <DeleteСoupleСategory fetchData={fetchData} />}
       
   </div>
  );
};

export default Categories;
