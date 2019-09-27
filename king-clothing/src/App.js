import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./Pages/Homepage/homepage.component";
import shopPage from "./Pages/shop/shop.component";
import Header from "./Components/Header/header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";



class App extends React.Component{
  constructor(){
    super();

    this.state = {currentUser: null}
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {})
      }
  });
    
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {

  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={shopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}}

export default App;
