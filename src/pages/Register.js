import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, Dimensions, StyleSheet, KeyboardAvoidingView, Keyboard, ActivityIndicator } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Linking } from 'expo';

import { NameField, EmailField, NewPasswordField } from '../components/Fields';
import { SignUp } from '../components/Authenticate';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);

export default function Register({ navigation }) {
  const colorScheme = useColorScheme();
  const themeContainer = colorScheme === "dark" ? styles.darkContainer : styles.lightContainer;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [loading, setLoadingStatus] = useState(false);

  let buttonDisplay = loading === true ? 
    <ActivityIndicator size="small" color="#ffffff" /> :
    <Text style={styles.buttonText}>
      {isSignedUp ? "Signed up!" : "Sign up"}
    </Text>

  const handleFirstNameChange = (name) => {
    setFirstName(name);
  };

  const handleLastNameChange = (name) => {
    setLastName(name);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password)
  };

  const handleConfirmPasswordChange = (password) => {
    setConfirmPassword(password);
  };

  const onSubmit = async () => {
    setFirstNameMessage(firstName === "" ? "First name cannot be blank." : "");
    setLastNameMessage(lastName === "" ? "Last name cannot be blank." : "");
    setEmailMessage(email === "" ? "Email cannot be blank." : "");
    setPasswordMessage(password.length < 8 ? "Password must be at least 8 characters long." : "");
    setConfirmPasswordMessage(password === confirmPassword ? "" : "Passwords do not match.");

    if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && confirmPassword === password && password.length >= 8) {
      setLoadingStatus(true);

      let response = await SignUp(email, password)
        .catch(error => {
          switch (error.code) {
            case "auth/email-already-in-use":
              setEmailMessage("Email already in use. Please try a different one.");
              return null;
            case "auth/invalid-email":
              setEmailMessage("Invalid email.");
              return null;
            case "auth/operation-not-allowed":
              setEmailMessage("Email/password accounts are currently disabled.");
              return null;
            case "auth/weak-password":
              setPasswordMessage("Password is too weak.");
              return null;
            default:
              setPasswordMessage(error.message);
              return null;
          }
        });

      setLoadingStatus(false);
      
      if (response) {
        setIsSignedUp(true);
      }
    }
  }

  return (
    <AppearanceProvider>
      <KeyboardAvoidingView style={[styles.container, themeContainer]} behavior={"padding"} enabled >
        <TouchableOpacity style={styles.logoContainer} onPress={() => Linking.openURL("https://www.inspiredtaste.net/38940/spaghetti-with-meat-sauce-recipe/")}>
          <Image style={styles.logo} source={require('../../assets/logo.jpg')} />
        </TouchableOpacity>
        <NameField 
          placeholder={"First Name"} 
          onChangeText={handleFirstNameChange}
          message={firstNameMessage}
          onSubmitEditing={() => Keyboard.dismiss()} />
        <NameField 
          placeholder={"Last Name"} 
          message={lastNameMessage}
          onChangeText={handleLastNameChange}  
        />
        <EmailField 
          message={emailMessage}
          onChangeText={handleEmailChange}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <NewPasswordField 
          placeholder={"Password (8 characters minimum)"}
          message={passwordMessage}
          onChangeText={handlePasswordChange}
        />
        <NewPasswordField 
          placeholder={"Confirm Password"}
          message={confirmPasswordMessage}
          onChangeText={handleConfirmPasswordChange}  
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={onSubmit}  
        >
          {buttonDisplay}
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.smallButton}
          onPress={() => navigation.navigate("Login")}  
        >
          <Text style={styles.smallButtonText}>Already have an account? Sign in</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </AppearanceProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  darkContainer: {
    backgroundColor: "#000000",
  },
  lightContainer: {
    backgroundColor: "#ffffff"
  },
  logo: {
    height: 100,
    width: 275,
  },
  logoContainer: {
    marginBottom: 35,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
    height: 40,
    width: 100,
    backgroundColor: '#981ceb',
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: 'white'
  },
  smallButton: {
    height: 30,
    justifyContent: "center",
  },
  smallButtonText: {
    color: "gray",
    fontWeight: "bold",
  }
})