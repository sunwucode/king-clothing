import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import './App.css';

import HomePage from "./Pages/Homepage/homepage.component";
import shopPage from "./Pages/shop/shop.component";
import Header from "./Components/Header/header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";


class App extends React.Component{
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const  { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
                
      }

      else {setCurrentUser( userAuth)};
  });
    
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {

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
}}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(setCurrentUser(user)))
});

export default connect(null, mapDispatchToProps) (App);
