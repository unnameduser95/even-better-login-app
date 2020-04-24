import * as firebase from "firebase/app";

import "firebase/auth";

import firebaseConfig from "./Firebase";

firebase.initializeApp(firebaseConfig);

const SignIn = async (email, password) => {
  let response = await firebase.auth().signInWithEmailAndPassword(email, password);

  return response;
};

const SignUp = async (email, password) => {
  let response = await firebase.auth().createUserWithEmailAndPassword(email, password);

  return response;
};

export { SignIn, SignUp }