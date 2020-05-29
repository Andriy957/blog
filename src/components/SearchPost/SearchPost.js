import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { upadateSearchInputPost } from "../../actions/filterPost.js";
import './styles.css';

export default () => {
    
  const dispatch = useDispatch();
  const searchInput = useSelector(state => state.filterImageReducer.searchInput);
    
  return (
    <div className="searchPost">
        <input type="text" className="searchInputPost" onChange={(event) => dispatch(upadateSearchInputPost(event))} value={searchInput} placeholder=" search by title name"/>
    </div>
  );
};

