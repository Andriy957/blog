import React from 'react';
import createBrowserHistory from "history/createBrowserHistory";
import {BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom";

import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories.js";
import Home from "../components/Home/Home.js";
import LoginForm from "../components/Login/LoginForm";
import Logout from "../components/Logout/Logout";
import SignupForm from "../components/Signup/SignupForm";
import { PrivateRoute } from './PrivateRoute';

const history = createBrowserHistory();

const App = () => {
    
    return (
      <BrowserRouter>
        <div>
            <Switch>
               <Route exact path="/" component={SignupForm} /> 
               <PrivateRoute path="/home">
                   <Home/>
               </PrivateRoute>
               <PrivateRoute path="/categories">
                   <Categories/>
               </PrivateRoute>
               <Route path="/login" component={LoginForm} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
        
