import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log("Device dimensions:", screenWidth, screenHeight);

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  // componentDidMount() {
  //   const username = "username";
  //   const password = "password";
  //   this.setState({username: username, password: password});
  //   console.log(username, password);
  // }

  usernameChange = (text) => {
    this.setState({username: text});
  }

  passwordChange = (text) => {
    this.setState({password: text});
  }

  onPressButton = () => {
    console.log("Button pressed");
    // console.log(this.state);
  }

  render() {
    console.log("Rendering");
    // console.log(this.state);
    return (
      <KeyboardAvoidingView style={styles.container} behavior={"padding"} contentContainerStyle={styles.container} enabled>
      {/* <View style={styles.container}> */}
        <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
        <TextInput style={styles.field}
          placeholder={"Username"}
          autoCorrect={false}
          autoCapitalize={"none"}
          textContentType={"username"}
          onChangeText={this.usernameChange}>
        </TextInput>
        <TextInput 
          style={styles.field} 
          placeholder={"Password"} 
          autoCorrect={false} 
          autoCapitalize={"none"} 
          textContentType={"password"}
          secureTextEntry={true}
          onChangeText={this.passwordChange}>
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={this.onPressButton}>
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
    backgroundColor: "#d9d9d9",
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