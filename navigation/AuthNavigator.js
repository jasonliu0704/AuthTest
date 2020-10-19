//import { createStackNavigator } from 'react-navigation-stack';
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import SignUpCont from '../screens/SignUpCont';


/*export const AuthNavigator = createStackNavigator(
  {
    Login,
    SignUp,
    SignUpCont,
  },
  {
    headerMode: 'none',
  },
)*/

const Stack = createStackNavigator()

export function AuthNavigator() {
  return (
    <Stack.Navigator
      headerMode={'none'}
    >
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
      />
      <Stack.Screen
        name='SignUpCont'
        component={SignUpCont}
      />
    </Stack.Navigator>
  )
}