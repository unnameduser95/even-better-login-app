import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Account from './src/pages/Account';

function LoginStuff(props) {  // signup and signin
  const Stack = createStackNavigator();

  // nightmare nightmare nightmare nightmare nightmare nightmare nightmare nightmare nightmare 
  return (
    <Stack.Navigator 
      headerMode={"none"}
    >
      <Stack.Screen name="Login">
        {stuff => <Login onSignIn={props.onSignIn} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
};

function AccountStuff(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode={"none"}
    >
      <Stack.Screen name="Account">
        {stuff => <Account onSignOut={props.onSignOut} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      {/* <LoginStuff onSignIn={(user) => {setUser(user)}} /> */}

      {user ? 
        <AccountStuff onSignOut={() => setUser(null)} /> : 
        <LoginStuff onSignIn={(user) => {setUser(user)}} />
      }
    </NavigationContainer>
  );
}