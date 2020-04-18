import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log(screenWidth, screenHeight);

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
        <TextInput style={styles.field} placeholder={"Username"}></TextInput>
        <TextInput style={styles.field} placeholder={"Password"}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: screenWidth * 0.30,
    height: 100,
  },
  field: {
    marginTop: 50,
    width: screenWidth * 0.7,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
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
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  smallButtonText: {
    color: "gray"
  }
});