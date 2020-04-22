import * as firebase from "firebase/app";

import "firebase/auth";

import firebaseConfig from "./Firebase";

firebase.initializeApp(firebaseConfig);

const signIn = async (email, password) => {
  let response = await firebase.auth().signInWithEmailAndPassword(email, password);

  return response;
};

export default signIn;