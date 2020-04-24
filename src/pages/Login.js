import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, Keyboard, TouchableWithoutFeedback, View, ActivityIndicator } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'expo';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

import signIn from '../components/Authenticate';
import { EmailField, PasswordField } from '../components/Fields';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log("Device dimensions:", screenWidth, screenHeight);

export default function Login({ navigation }) {
  const colorScheme = useColorScheme();
  const themeContainer = colorScheme === "dark" ? styles.darkContainer : styles.lightContainer;
  const themeText = colorScheme === "dark" ? styles.lightText : styles.darkText;
  const themeStatusBar = colorScheme === "dark" ? "light-content" : "dark-content";
  
  const [loading, setLoadingStatus] = useState(false);

  const [username, setUsername] = useState("");  // useState hook returns variable and function
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [messageEmail, setMessageEmail] = useState("");  // message displays below email field
  const [messagePassword, setMessagePassword] = useState("");  // message displays below password field

  let buttonDisplay = loading === true ? <ActivityIndicator size="small" color="#ffffff" /> : <Text style={styles.buttonText}>{isSignedIn ? "Signed in!" : "Sign in"}</Text>

  const onSubmit = async () => {
    setMessageEmail(username === "" ? "Email field cannot be blank." : "");  // sets error message depending on blank field
    setMessagePassword(password === "" ? "Password field cannot be blank." : "");

    if (username !== "" && password !== "") {
      setLoadingStatus(true);  // toggles loading

      const response = await signIn(username, password)
        .catch(error => {  // handle errors
          switch (error.code) {
            case "auth/wrong-password":
              setMessagePassword("Invalid email or password.");  // nice
              return null;
            case "auth/invalid-email":
              setMessagePassword("Invalid email or password.");
              return null;
            case "auth/user-not-found":
              setMessagePassword("Invalid email or password.");
              return null;
            default:
              setMessagePassword(error.message);
              return null;
          }
        });

      setLoadingStatus(false);

      if (response) {
        setIsSignedIn(true);
      }
    }
  }

  const handleEmailChange = (email) => {
    setUsername(email);
    if (email !== "") { setMessageEmail(""); }
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    if (password !== "") { setMessagePassword(""); }
  };

  return (
    <AppearanceProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={[styles.container, themeContainer]} behavior={"padding"} enabled>
          <StatusBar backgroundColor={themeStatusBar === "dark-content" ? "#ffffff" : "#000000"} barStyle={themeStatusBar} hidden={false} />
          <TouchableOpacity style={styles.logoContainer} onPress={() => Linking.openURL("https://www.inspiredtaste.net/38940/spaghetti-with-meat-sauce-recipe/")}>
            <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
          </TouchableOpacity>
          <EmailField 
            message={messageEmail} 
            onChangeText={handleEmailChange}
          />
          <PasswordField 
            message={messagePassword} 
            onChangeText={handlePasswordChange}  
            onSubmitEditing={() => {if (!isSignedIn && !loading) {onSubmit(username, password)}}}
          />
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => onSubmit(username, password)}
            disabled={isSignedIn || loading}>
            {buttonDisplay}
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.smallButtonText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.smallButton]}
            onPress={() => navigation.navigate("Register")}  
          >
            <Text style={styles.smallButtonText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        {/* </View> */}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </AppearanceProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: screenHeight,
  },
  darkContainer: {
    backgroundColor: "#000000"
  },
  lightContainer: {
    backgroundColor: "#ffffff",
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
  fieldContainer: {
    width: 275,
    height: 70
  },
  inputContainer: {  // used with TextInput and View
    marginTop: 35,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    width: 275
  },
  field: {
    height: 40
  },
  passwordContainer: {
    flexDirection: "row",
  },
  showHideButton: {
    justifyContent: "center", 
    alignItems: "center", 
    height: 40, 
    width: 40
  },
  darkField: {
    // backgroundColor: "#3b3b3b",
    color: "#ffffff",
  },
  lightField: {
    // backgroundColor: "#d9d9d9",
    color: "#000000",
  },
  darkText: {
    color: "black"
  },
  lightText: {
    color: "white"
  },
  errorText: {
    color: "red",
    marginTop: 3,
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
});