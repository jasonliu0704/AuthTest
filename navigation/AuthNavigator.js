import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import SignUpCont from '../screens/SignUpCont';


export const AuthNavigator = createStackNavigator(
  {
    Login,
    SignUp,
    SignUpCont,
  },
  {
    headerMode: 'none',
  },
)
