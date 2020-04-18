import React, { Component } from 'react';
import { Input, Text, StyleSheet, View, Dimensions, Image } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log(screenWidth, screenHeight);

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
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
  }
});