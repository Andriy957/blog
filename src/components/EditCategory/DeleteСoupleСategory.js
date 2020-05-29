import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import {api} from '../../utils';
import {listRoute} from '../../constants';
import './styles.css';
import { cancelCoupleDeleteModal } from "../../actions/editList.js";

const DeleteСoupleСategory = (props) => {
    
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.filterListReducer.currentPage);
    const quantityElementPage = useSelector(state => state.filterListReducer.quantityElementPage);
    const sortAscDesc = useSelector(state => state.filterListReducer.sortAscDesc);
    const searchInput = useSelector(state => state.filterListReducer.searchInput);
    const numberCoupleIdDelete = useSelector(state => state.editListReducer.numberCoupleIdDelete);
    
    async function delCategory ()  {
          try {
              const data = await api(`${listRoute}?ids=[${numberCoupleIdDelete}]`, {
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
          <button type="button" onClick={() => dispatch(cancelCoupleDeleteModal())}>Cancel</button>
       </div>
   );
};

export default DeleteСoupleСategory;