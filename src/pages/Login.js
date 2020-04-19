import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log("Device dimensions:", screenWidth, screenHeight);

export default function Login(props) {
  const colorScheme = useColorScheme();
  const themeContainer = colorScheme === "dark" ? styles.darkContainer : styles.lightContainer;
  const themeField = colorScheme === "dark" ? styles.darkField : styles.lightField;
  const themePlaceholder = colorScheme === "dark" ? "#c4c4c4" : "gray";
  
  const [username, setUsername] = useState("");  // useState hook returns variable and function
  const [password, setPassword] = useState("");

  return (
    <AppearanceProvider>
      <KeyboardAvoidingView style={[styles.container, themeContainer]} behavior={"padding"} contentContainerStyle={[styles.container, themeContainer]} enabled>
      {/* <View style={styles.container}> */}
        <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
        <TextInput style={[styles.field, themeField]}
          placeholder={"Username"}
          placeholderTextColor={themePlaceholder}
          autoCorrect={false}
          autoCapitalize={"none"}
          textContentType={"username"}
          onChangeText={(text) => setUsername(text)}>
        </TextInput>
        <TextInput 
          style={[styles.field, themeField]} 
          placeholder={"Password"} 
          placeholderTextColor={themePlaceholder}
          autoCorrect={false} 
          autoCapitalize={"none"} 
          textContentType={"password"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}>
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={() => console.log(username, password)}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      {/* </View> */}
      </KeyboardAvoidingView>
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
  },
  field: {
    marginTop: 50,
    paddingLeft: 10,
    width: screenWidth * 0.7,
    height: 40,
    borderRadius: 5,
    color: "#000000"
  },
  darkField: {
    backgroundColor: "#3b3b3b",
    color: "#ffffff",
  },
  lightField: {
    backgroundColor: "#d9d9d9",
    color: "#000000",
  },
  button: {
    marginTop: 50,
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
    alignItems: "center",
  },
  smallButtonText: {
    color: "gray"
  }
});