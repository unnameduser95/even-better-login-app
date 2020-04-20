import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, Keyboard, TouchableWithoutFeedback, View, ActivityIndicator } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'expo';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log("Device dimensions:", screenWidth, screenHeight);

export default function Login(props) {
  const colorScheme = useColorScheme();
  const themeContainer = colorScheme === "dark" ? styles.darkContainer : styles.lightContainer;
  const themeField = colorScheme === "dark" ? styles.darkField : styles.lightField;
  const themePlaceholder = colorScheme === "dark" ? "#c4c4c4" : "gray";
  const themeStatusBar = colorScheme === "dark" ? "light-content" : "dark-content";

  const passwordInput = React.createRef();
  
  const [loading, setLoadingStatus] = useState(false);
  const [username, setUsername] = useState("");  // useState hook returns variable and function
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const onSubmit = () => {
    console.log("Email:", username);
    console.log("Password:", password);

    setErrorMessageEmail(username === "" ? "Email field cannot be blank." : "");
    setErrorMessagePassword(password === "" ? "Password field cannot be blank." : "");

    if (username === "" || password === "") {
      console.log("Email or password is blank. Loading indicator won't be displayed.")
      return 1;
    } else {
      setLoadingStatus(!loading);
    }
  }

  let buttonDisplay = loading === true ? <ActivityIndicator size="small" color="#ffffff" /> : <Text style={styles.buttonText}>Sign in</Text>

  return (
    <AppearanceProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={[styles.container, themeContainer]} behavior={"padding"} enabled>
        {/* <View style={styles.container}> */}
          <StatusBar backgroundColor={themeStatusBar === "dark-content" ? "#ffffff" : "#000000"} barStyle={themeStatusBar} hidden={false} />
          <TouchableOpacity onPress={() => Linking.openURL("https://www.inspiredtaste.net/38940/spaghetti-with-meat-sauce-recipe/")}>
            <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
          </TouchableOpacity>
          <View style={styles.fieldContainer}>
            <TextInput style={[styles.field, styles.inputContainer, themeField]}
              placeholder={"Email"}
              placeholderTextColor={themePlaceholder}
              autoCorrect={false}
              autoCapitalize={"none"}
              textContentType={"emailAddress"}
              onChangeText={(text) => setUsername(text)}
              onSubmitEditing={() => passwordInput.current.focus()}
              keyboardType={"email-address"}
              returnKeyType={"next"}
              autoFocus={true}
              blurOnSubmit={false}>
            </TextInput>
            <Text style={styles.errorText}>{errorMessageEmail}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <View style={[styles.passwordContainer, styles.inputContainer]}>
              <TextInput 
                ref={passwordInput}
                style={[styles.field, themeField, {width: 235}]}  // custom width for password field; must have space for show/hide button (width 40)
                placeholder={"Password"} 
                placeholderTextColor={themePlaceholder}
                autoCorrect={false} 
                autoCapitalize={"none"} 
                textContentType={"password"}
                secureTextEntry={hidePassword}
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={() => onSubmit(username, password)}>
              </TextInput>
              <TouchableOpacity 
                style={styles.showHideButton}
                onPress={() => setHidePassword(!hidePassword)}
              >
                <Ionicons name={hidePassword === true ? "md-eye" : "md-eye-off"} color="gray" size={22} />
              </TouchableOpacity>
            </View>
            <Text style={styles.errorText}>{errorMessagePassword}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => onSubmit(username, password)}>
            {/* <Text style={styles.buttonText}>Sign in</Text> */}
            {buttonDisplay}
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.smallButtonText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.smallButton]}>
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
  fieldContainer: {
    width: 275,
    height: 80
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
  errorText: {
    color: "red",
    marginTop: 3,
  },
  button: {
    marginTop: 35,
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