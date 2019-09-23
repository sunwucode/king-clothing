import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./Pages/Homepage/homepage.component";
import shopPage from "./Pages/shop/shop.component";
import Header from "./Components/Header/header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={shopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
