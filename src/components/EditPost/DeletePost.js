import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import {apiImage} from '../../utils/apiImage.js';
import {imageRoute} from '../../constants';
import './styles.css';
import { cancelDeleteModalPost } from "../../actions/editPost.js";

const DeletePost = (props) => {
    
    const dispatch = useDispatch();
    const numberIdDelete = useSelector(state => state.editImageReducer.numberIdDelete);
    const currentPage = useSelector(state => state.filterImageReducer.currentPage);
    const quantityElementPage = useSelector(state => state.filterImageReducer.quantityElementPage);
    const sortAscDesc = useSelector(state => state.filterImageReducer.sortAscDesc);
    const searchInput = useSelector(state => state.filterImageReducer.searchInput);
    
    async function delCategory ()  {
          try {
              const data = await apiImage(`${imageRoute}/${numberIdDelete}`, {
                  method:'DELETE',
              });
             props.fetchDataPost(currentPage, quantityElementPage, sortAscDesc, searchInput)(dispatch);
              
          } catch(e) { 
              console.error(e);
          }   
    }
   return (
       <div className="button-delete-post">
          <p>Are you sure that want to delete category?</p>
          <button type="button" onClick={() => delCategory()}>Delete</button>
          <button type="button" onClick={() => dispatch(cancelDeleteModalPost())}>Cancel</button>
       </div>
   );
};

export default DeletePost;