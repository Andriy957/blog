import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { upadateStateSearchInput } from "../../actions/filterList.js";
import './styles.css';

export default () => {
    
  const dispatch = useDispatch();
  const searchInput = useSelector(state => state.filterListReducer.searchInput);
    
  return (
    <div className="search">
        <input type="text" 
               className="searchInput"
               onChange={(event)=> dispatch(upadateStateSearchInput(event))} 
               value={searchInput}
               placeholder=" search by title name"
        />
    </div>
  );
};