import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoading from '../screens/AuthLoading';
import { AuthNavigator } from './AuthNavigator';
import { HomeNavigator } from './HomeNavigator';


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: HomeNavigator,
      Auth: AuthNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);