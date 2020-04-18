import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log(screenWidth, screenHeight);

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={"position"} contentContainerStyle={styles.container} enabled>
      {/* <View style={styles.container}> */}
        <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
        <TextInput style={styles.field}
          placeholder={"Username"}
          autoCorrect={false}
          autoCapitalize={"none"}
          textContentType={"username"}>
        </TextInput>
        <TextInput 
          style={styles.field} 
          placeholder={"Password"} 
          autoCorrect={false} 
          autoCapitalize={"none"} 
          textContentType={"password"}
          secureTextEntry={true}>
        </TextInput>
        <TouchableOpacity style={styles.button}>
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: screenWidth * 0.40,
    height: 100,
  },
  field: {
    marginTop: 50,
    paddingLeft: 10,
    width: screenWidth * 0.7,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
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