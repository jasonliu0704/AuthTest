import React from 'react';
import { AsyncStorage, View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { buttonStyles } from '../styles'


export default class Profile extends React.Component {
  componentDidMount() {
    this.authCheck();
  }

   authCheck = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  logout = async () => {
    //todo
    await AsyncStorage.setItem('userToken', '');
    await AsyncStorage.setItem('userObject', '');
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile screen</Text>
        <Button mode="contained" 
            uppercase= {false}
            style={buttonStyles.primary}
            onPress={this.logout}>
            Logout
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})