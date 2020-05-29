import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import './styles.css';
import Logout from '../Logout/Logout';

const Header = () => {
    return (
        <div className='header'>
           <Logout/>
           <Link to="/login"><button className="login-button">Login</button></Link>
          <div className='header-nav'>
             <Link to="/home"><button className="link-home">Home</button></Link>
             <Link to="/categories"><button className="link-home">Categories</button></Link>
          </div>
        </div>
    );
}

export default Header;