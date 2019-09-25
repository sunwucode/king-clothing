import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyADnDE5sWREHM3nrjohuQcs9Fp4P998yO8",
    authDomain: "king-clothes-737dd.firebaseapp.com",
    databaseURL: "https://king-clothes-737dd.firebaseio.com",
    projectId: "king-clothes-737dd",
    storageBucket: "",
    messagingSenderId: "271206488029",
    appId: "1:271206488029:web:f65cdcc42c916bca9e8834"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"})
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


