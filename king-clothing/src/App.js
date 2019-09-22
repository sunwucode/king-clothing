import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./Pages/Homepage/homepage.component";
import shopPage from "./Pages/shop/shop.component";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;
