import React from 'react';
import { AsyncStorage, View, ActivityIndicator, StyleSheet } from 'react-native'


export default class App extends React.Component {
  componentDidMount() {
    this.authCheck();
  }

   authCheck = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ActivityIndicator size="large"/>
        </View>
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