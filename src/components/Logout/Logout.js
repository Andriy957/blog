import React from "react";
import { useHistory } from "react-router-dom";

import './styles.css';

const Logout = () => {
  const history = useHistory();
    
  const deleteToken = () => {
    localStorage.removeItem('myToken');
    history.push("/");
  };

    return (
        <div className='button-logout'>
           <button onClick={deleteToken}>Logout</button>   
        </div>
    );
  }

export default Logout;
