import React, {useState} from 'react';
import AuthLoading from '../screens/AuthLoading';
import { AuthNavigator } from './AuthNavigator';
import { HomeNavigator } from './HomeNavigator';
import LoginContext from '../contexts/LoginContext'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()


export default function AppNavigator() {
  //not used 
  const {isLoggedIn, setIsLoggedIn} = useState(false)

  return (
    <LoginContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn
    }}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode={'none'}
        >
          <Stack.Screen
            name='AuthLoading'
            component={AuthLoading}
          />
          <Stack.Screen
            name='Auth'
            component={AuthNavigator}
          />
          <Stack.Screen
            name='App'
            component={HomeNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LoginContext.Provider>
  )
}