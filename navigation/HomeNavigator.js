import React from 'react';
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import { createStackNavigator } from 'react-navigation-stack';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Discover from '../screens/Discover';
import Search from '../screens/Search';
import Chat from '../screens/Chat';
import CreateGroup from '../screens/CreateGroup';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()


/*const DiscoverStack = createStackNavigator({
  Discover, 
  Search,
  Chat,
  CreateGroup: {
    screen: CreateGroup,
    navigationOptions: {
      title: `Create Group `,
    },
  },
});*/

function DiscoverStack() {
  return (
    <Stack.Navigator
      initialRouteName='Discover'
    >
      <Stack.Screen
        name='Discover'
        component={Discover}
        options={ { headerShown: false } }
      />
      <Stack.Screen
        name='Search'
        component={Search}
        options={ { headerShown: false } }
      />
      <Stack.Screen
        name='Chat'
        component={Chat}
        options={ { headerShown: false } }
      />
      <Stack.Screen
        name='CreateGroup'
        component={CreateGroup}
        options={{ title: 'Create Group' }}
        options={ { headerShown: false } }
      />
    </Stack.Navigator>
  )
}

/*const MessagesStack = createStackNavigator({
  Messages,
});*/

function MessagesStack() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name='Messages'
        component={Messages}
        options={ { headerShown: false } }
      />
    </Stack.Navigator>
  )
}

/*const ProfileStack = createStackNavigator({
  Profile,
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: `Edit Profile`,
    },
  },
});*/

function ProfileStack() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={ { headerShown: false } }
      />
      <Stack.Screen
        name='EditProfile'
        component={EditProfile}
        options={{ title: 'Edit Profile' }}
        options={ { headerShown: false } }
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent = Ionicons;
          const routeName = route.name

          let iconName;
          if (routeName === 'Discover') {
            iconName = 'ios-compass'
          } else if (routeName === 'Messages') {
            iconName = 'ios-chatbubbles';
          } else if (routeName === 'Profile') {
            iconName = 'ios-person';
          }

          return <IconComponent name={iconName} size={25} color={color} style={{ marginBottom: -8 }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#42A5F5',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Discover" component={DiscoverStack} />
      <Tab.Screen name="Messages" component={MessagesStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
  )
}