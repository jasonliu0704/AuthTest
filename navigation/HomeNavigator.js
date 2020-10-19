import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Discover from '../screens/Discover';
import Search from '../screens/Search';
import Chat from '../screens/Chat';
import CreateGroup from '../screens/CreateGroup';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';

const DiscoverStack = createStackNavigator({
  Discover, 
  Search,
  Chat,
  CreateGroup: {
    screen: CreateGroup,
    navigationOptions: {
      title: `Create Group `,
    },
  },
});

const MessagesStack = createStackNavigator({
  Messages,
});

const ProfileStack = createStackNavigator({
  Profile,
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: `Edit Profile`,
    },
  },
});

export const HomeNavigator = createBottomTabNavigator(
  {
    Discover: DiscoverStack,
    Messages: MessagesStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Discover') {
          iconName = 'ios-compass'
        } else if (routeName === 'Messages') {
          iconName = 'ios-chatbubbles';
        } else if (routeName === 'Profile') {
          iconName = 'ios-person';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} style={{ marginBottom: -8 }} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42A5F5',
      inactiveTintColor: 'gray',
    },
  }
)