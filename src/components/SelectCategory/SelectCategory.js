import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectCategory } from "../../actions/editPost.js";

import './styles.css';

export default (props) => {
    
    const dispatch = useDispatch();
    const category = useSelector(state => state.editImageReducer.category);
    const listCategories = useSelector(state => state.editImageReducer.listCategories);

    return (
      <div className="select">
        <select onChange={(event)=> dispatch(updateSelectCategory(event))} value={category}>
          <option value="">-- Category --</option>
          {listCategories.map(item => <option value={item.id} key={item.id}>{item.title}</option>)}  
        </select> 
      </div>
  );
}

