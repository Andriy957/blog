import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import {api} from '../../utils';
import {listRoute} from '../../constants';
import './styles.css';
import { cancelDeleteModal } from "../../actions/editList.js";

const DeleteCategory = (props) => {
    
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.filterListReducer.currentPage);
    const quantityElementPage = useSelector(state => state.filterListReducer.quantityElementPage);
    const sortAscDesc = useSelector(state => state.filterListReducer.sortAscDesc);
    const searchInput = useSelector(state => state.filterListReducer.searchInput);
    const numberIdDelete = useSelector(state => state.editListReducer.numberIdDelete);
    
    async function delCategory ()  {
          try {
              const data = await api(`${listRoute}/${numberIdDelete}`, {
                  method:'DELETE',
              });
              
          props.fetchData(currentPage, quantityElementPage, sortAscDesc, searchInput)(dispatch);
              
          } catch(e) { 
              console.error(e);
          }   
    }
   return (
       <div className="button-delete">
          <p>Are you sure that want to delete category?</p>
          <button type="button" onClick={() => delCategory()}>Delete</button>
          <button type="button" onClick={() => dispatch(cancelDeleteModal())}>Cancel</button>
       </div>
   );
};

export default DeleteCategory;

