import React from 'react';
import { TouchableOpacity, Text, View, Dimensions, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

import { NameField, EmailField, NewPasswordField } from '../components/Fields';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);

export default function Register({ navigation }) {
  return (
    // <Text>Register page</Text>

    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView style={styles.container} behavior={"padding"} enabled >
      <NameField placeholder={"First Name"} />
      <NameField placeholder={"Last Name"} />
      <EmailField />
      <NewPasswordField />
      <NewPasswordField placeholder={"Confirm Password"} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.smallButton}
        onPress={() => navigation.navigate("Login")}  
      >
        <Text style={styles.smallButtonText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
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