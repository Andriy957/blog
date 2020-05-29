import React from "react";
import { useDispatch } from "react-redux";

import './styles.css';
import {apiUrl} from '../../constants';
import { editPost } from "../../actions/editPost.js";
import { deletePost } from "../../actions/editPost.js";

export default (props) => {
   const dispatch = useDispatch();
 return (
   <div className="post">
     {props.dataAttribute.map(item => (
        <div className="galery">
          <div>name: {item.title}</div>
          <div>category: {item.category.title}</div>
          <div><img src={`${apiUrl}uploads/${item.img.filename}`}/></div>
          <div>description: {item.description}</div>
          <div>created_at: {item.created_at}</div>
          <button className="editButtonPost" onClick={() => dispatch(editPost(item.id))}>Edit</button>
          <button className="deleteButtonPost" onClick={() => dispatch(deletePost(item.id))}>Delete</button>
        </div>
      ))}
 </div>
 );
}