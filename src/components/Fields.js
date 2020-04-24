import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NameField = (props) => {
  return (
    <View style={styles.fieldContainer}>
      <TextInput style={[styles.field, styles.inputContainer]}
        placeholder={"Name"}
        // placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : "gray"}
        autoCorrect={false}
        autoCapitalize={"words"}
        textContentType={"name"}
        onChangeText={props.onChangeText ? props.onChangeText : () => null}
        onSubmitEditing={props.onSubmitEditing ? props.onSubmitEditing : () => null}
        keyboardType={"default"}
        returnKeyType={"none"}
        autoFocus={false}
        blurOnSubmit={false}>
      </TextInput>
      <Text style={styles.errorText}>{props.message ? props.message : ""}</Text>
    </View>
  )
}

const EmailField = (props) => {
  // console.log(props);
  return (
    <View style={styles.fieldContainer}>
      <TextInput style={[styles.field, styles.inputContainer]}
        placeholder={"Email"}
        // placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : "gray"}
        autoCorrect={false}
        autoCapitalize={"none"}
        textContentType={"emailAddress"}
        onChangeText={props.onChangeText ? props.onChangeText : () => null}
        onSubmitEditing={props.onSubmitEditing ? props.onSubmitEditing : () => null}
        keyboardType={"email-address"}
        returnKeyType={"none"}
        autoFocus={props.autoFocus ? props.autoFocus : false}
        blurOnSubmit={false}>
      </TextInput>
      <Text style={styles.errorText}>{props.message ? props.message : ""}</Text>
    </View>
  )
}

const PasswordField = (props) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.fieldContainer}>
      <View style={[styles.passwordContainer, styles.inputContainer]}>
        <TextInput 
          style={[styles.field, {width: 235}]}  // custom width for password field; must have space for show/hide button (width 40)
          placeholder={"Password"} 
          autoCorrect={false}
          autoCapitalize={"none"} 
          textContentType={"password"}
          secureTextEntry={hidePassword}
          onChangeText={props.onChangeText ? props.onChangeText : () => null}
          onSubmitEditing={props.onSubmitEditing ? props.onSubmitEditing : () => null}
          focus={props.focus ? props.focus : false}>
        </TextInput>
        <TouchableOpacity 
          style={styles.showHideButton}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons name={hidePassword === true ? "md-eye" : "md-eye-off"} color="gray" size={22} />
        </TouchableOpacity>
      </View>
      <Text style={styles.errorText}>{props.message ? props.message : ""}</Text>
    </View>
  )
}

const NewPasswordField = (props) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.fieldContainer}>
      <View style={[styles.passwordContainer, styles.inputContainer]}>
        <TextInput 
          style={[styles.field, {width: 235}]}  // custom width for password field; must have space for show/hide button (width 40)
          placeholder={"Password"} 
          autoCorrect={false}
          autoCapitalize={"none"} 
          textContentType={"newPassword"}
          secureTextEntry={hidePassword}
          onChangeText={props.onChangeText ? props.onChangeText : () => null}
          onSubmitEditing={props.onSubmitEditing ? props.onSubmitEditing : () => null}
          focus={props.focus ? props.focus : false}>
        </TextInput>
        <TouchableOpacity 
          style={styles.showHideButton}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons name={hidePassword === true ? "md-eye" : "md-eye-off"} color="gray" size={22} />
        </TouchableOpacity>
      </View>
      <Text style={styles.errorText}>{props.message ? props.message : ""}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  fieldContainer: {
    width: 275,
    height: 70
  },
  inputContainer: {  // used with TextInput and View
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    width: 275
  },
  passwordContainer: {
    flexDirection: "row",
  },
  field: {
    height: 40
  },
  showHideButton: {
    justifyContent: "center", 
    alignItems: "center", 
    height: 40, 
    width: 40
  },
  errorText: {
    color: "red",
    marginTop: 3,
  },
});

export { NameField, EmailField, PasswordField, NewPasswordField };