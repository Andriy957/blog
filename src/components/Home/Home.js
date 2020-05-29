import React from "react";
import {Redirect} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header";
import SearchPost from '../SearchPost/SearchPost.js';
import './styles.css';
import {apiImage} from '../../utils/apiImage.js';
import {imageRoute} from '../../constants';
import {api} from '../../utils/api.js';
import {listRoute} from '../../constants';
import SignupInput from '../Signup/SignupInput/SignupInput';
import DisplayPost from "../DisplayPost/DisplayPost.js";
import AddPost from '../EditPost/AddPost.js';
import EditPost from '../EditPost/EditPost.js';
import DeletePost from '../EditPost/DeletePost.js';
import { modalAddPost } from "../../actions/editPost.js";
import { changePagePost, changeQuantityPost, changeSortAscDescPost } from "../../actions/filterPost.js";

const Home = () => {
    
    const dispatch = useDispatch();
    const listImage = useSelector(state => state.filterImageReducer.listImage);
    const isOpenedAdd = useSelector(state => state.editImageReducer.isOpenedAdd);
    const isOpenedEdit = useSelector(state => state.editImageReducer.isOpenedEdit);
    const isOpenedDelete = useSelector(state => state.editImageReducer.isOpenedDelete);
    const buttonsPagination = useSelector(state => state.filterImageReducer.buttonsPagination);
    const quantityElementPage = useSelector(state => state.filterImageReducer.quantityElementPage);
    const buttonsQuantityElementPage = useSelector(state => state.filterImageReducer.buttonsQuantityElementPage);
    const sortAscDesc = useSelector(state => state.filterImageReducer.sortAscDesc);
    const searchInput = useSelector(state => state.filterImageReducer.searchInput);
    const currentPage = useSelector(state => state.filterImageReducer.currentPage);
    
    useEffect(() => {
        fetchListCategory()(dispatch); 
    }, []);
    
    function fetchListCategory() {
       return async (dispatch) => {
         try {
           dispatch({ type: "LOAD_DATA_START_SELECT" }); 
             const dataCategories = await api(`${listRoute}?limit=100`, {
                method: 'GET',
             });
           
           dispatch({ type: "LOAD_DATA_END_SELECT", payload: dataCategories });
    
         } catch (e) {
            console.error(e);
         }
       }
    }

   useEffect(() => {
      fetchDataPost(currentPage, quantityElementPage, sortAscDesc, searchInput)(dispatch);
   }, [currentPage, quantityElementPage, sortAscDesc, searchInput]);
    
    function fetchDataPost(valuePage, valueElement, valueSort, valueFilter) {
       return async (dispatch) => {
         try {
           dispatch({ type: "LOAD_DATA_START_POSTS" }); 
             const data = await apiImage(`${imageRoute}?page=${valuePage}&limit=${valueElement}&order=${valueSort}&q=${valueFilter}&orderBy=created_at`, {
               method: 'GET',
             });
           dispatch({ type: "LOAD_DATA_END_POSTS", payload: data }); 
          } catch (e) {
              console.error(e);
          }
        }
     }
    
  return (
     <div>
       <Header />
       <SearchPost />
       
       <div className="button-sortAscDesc-post">
            <button onClick={() => dispatch(changeSortAscDescPost())}>sort by creation: <big>{sortAscDesc}</big></button>
       </div>
      
       <div className="button-elements-post">    
           {[...Array(buttonsQuantityElementPage)].map((item, index) => (                  
              <button onClick={() => dispatch(changeQuantityPost(index+2))}>Elements: {index+2}
              </button>
           ))}
       </div>

       <div className="displayPost">
          <DisplayPost dataAttribute={listImage} />
       </div>
       
        <div className="button-pagination-post">
           {[...Array(buttonsPagination)].map((item, index) => (
              <button    
              onClick={() => dispatch(changePagePost(index + 1))}>{index + 1}
              </button>
           ))}
        </div>
        
        <div className="button-modalAddPost-post">
            <button onClick={() => dispatch(modalAddPost())}>Add Post</button>
        </div>
      
        {isOpenedAdd && <AddPost fetchDataPost={fetchDataPost} />}
        {isOpenedEdit && <EditPost fetchDataPost={fetchDataPost} />}
        {isOpenedDelete && <DeletePost fetchDataPost={fetchDataPost} />}
      </div>
  );
};

export default Home;
