import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeSortAscDesc } from "../../actions/filterList.js";
import { editСategory, deleteCategory, deleteСoupleСategory } from "../../actions/editList.js";
import './styles.css'

export default (props) => {
    
  const dispatch = useDispatch();  
  const sortAscDesc = useSelector(state => state.filterListReducer.sortAscDesc);
 
 return (
   <table className="table">
    <thead className="table-head">
      <tr>
        <th></th>
        <th className="th-id" onClick={() => dispatch(changeSortAscDesc())}>ID <small>{sortAscDesc}</small></th>
        <th>TITLE</th>
        <th>CREATED_AT</th>
        <th>UPDATED_AT</th>
      </tr>
    </thead>
    <tbody className="table-body">
       {props.dataAttribute.map(item => (
        <tr key={item.id}>
          <input type="checkbox" className="checkboxDelete" onClick={() => dispatch(deleteСoupleСategory(item.id))}/>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.created_at}</td>
          <td>{item.updated_at}</td>
          <button className="editButton" onClick={() => dispatch(editСategory(item.id))}>Edit</button>
          <button className="deleteButton" onClick={() => dispatch(deleteCategory(item.id))}>Delete</button>
        </tr>
      ))}
    </tbody>
  </table>
 );
}