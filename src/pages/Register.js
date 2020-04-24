import React, { useState } from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';

import { NameField, EmailField, NewPasswordField } from '../components/Fields';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);

export default function Register({ navigation }) {
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
    return;
  }

  return (
    <AppearanceProvider>
      <KeyboardAvoidingView style={styles.container} behavior={"padding"} enabled >
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
          message={passwordMessage}
          onChangeText={handlePasswordChange}
        />
        <NewPasswordField 
          placeholder={"Confirm Password"}
          message={confirmPasswordMessage}
          onChangeText={handleConfirmPasswordChange}  
        />
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
    </AppearanceProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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