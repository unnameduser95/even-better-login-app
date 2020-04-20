import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
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
  
  const [username, setUsername] = useState("");  // useState hook returns variable and function
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <AppearanceProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={[styles.container, themeContainer]} behavior={"padding"} enabled>
        {/* <View style={styles.container}> */}
          <StatusBar backgroundColor={themeStatusBar === "dark-content" ? "#ffffff" : "#000000"} barStyle={themeStatusBar} hidden={false} />
          <TouchableOpacity onPress={() => Linking.openURL("https://www.inspiredtaste.net/38940/spaghetti-with-meat-sauce-recipe/")}>
            <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
          </TouchableOpacity>
          <TextInput style={[styles.field, styles.fieldContainer, themeField]}
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
          <View style={[styles.passwordContainer, styles.fieldContainer]}>
            <TextInput 
              ref={passwordInput}
              style={[styles.field, themeField, {width: 235}]}  // custom width for password field; must have space for show/hide button (width 40)
              placeholder={"Password"} 
              placeholderTextColor={themePlaceholder}
              autoCorrect={false} 
              autoCapitalize={"none"} 
              textContentType={"password"}
              secureTextEntry={hidePassword}
              onChangeText={(text) => setPassword(text)}>
            </TextInput>
            <TouchableOpacity 
              style={styles.showHideButton}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <Ionicons name={hidePassword === true ? "md-eye" : "md-eye-off"} color="gray" size={22} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => console.log(username, password)}>
            <Text style={styles.buttonText}>Sign in</Text>
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
  fieldContainer: {  // container for fields; used with TextInput and View
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