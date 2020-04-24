import React from 'react';
import { TouchableOpacity, Text, View, Dimensions, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

import { NameField, EmailField, NewPasswordField } from '../components/Fields';

const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);

export default function Register(props) {
  return (
    // <Text>Register page</Text>

    <KeyboardAvoidingView style={styles.container} behavior={"padding"} enabled >
      <NameField placeholder={"First Name"} />
      <NameField placeholder={"Last Name"} />
      <EmailField />
      <NewPasswordField />
      <NewPasswordField placeholder={"Confirm Password"} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  }
})