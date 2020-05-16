import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function Account(props) {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Change email</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={Styles.button}
      >
        <Text style={Styles.buttonText}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={Styles.button}
        onPress={props.onSignOut}  
      >
        <Text style={Styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: screenHeight,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
    height: 50,
    width: 120,
    backgroundColor: '#981ceb',
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: 'white'
  },
})