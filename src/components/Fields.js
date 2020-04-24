import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Field(props) {  
  // props: error (str), secure (bool), showHideButton (bool)

  let [field, setField] = useState(<EmailField message={"Dummy error message"} />);

  switch (props.field) {
    case "email": setField(<EmailField message={"Dummy email error message"} />)
    case "password": setField(<PasswordField message={"Dummy password error message"} />)
  }

  return (
    <View>
      {field}
    </View>
  );
};

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
        returnKeyType={"next"}
        autoFocus={true}
        blurOnSubmit={false}>
      </TextInput>
      <Text style={styles.errorText}>{props.message}</Text>
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
      <Text style={styles.errorText}>{props.message}</Text>
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

export { EmailField, PasswordField };