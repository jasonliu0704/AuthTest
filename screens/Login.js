import React from 'react';
import { AsyncStorage, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { styles, buttonStyles, inputStyles } from '../styles'
import LoginContext from '../contexts/LoginContext'


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '', 
      password: '',
    }
  }

  login = async () => {
    const { username, password } = this.state

    let url = "http://localhost:8080/auth/login?username="+username+"&password="+password

    //just for testing page navigation without backend support
    await AsyncStorage.setItem('userToken', 'token');
    await AsyncStorage.setItem('userObject', 'data');

    this.props.navigation.navigate('App');
  
    //todo
    /*try {
      const response =  await fetch(url, {method: 'POST'})
      
      if (response.status === 200) {
        const userData = await response.json()

        await AsyncStorage.setItem('userToken', response.headers.map.authorization);
        await AsyncStorage.setItem('userObject', JSON.stringify(userData));
        
        this.props.navigation.navigate('App');
      } else {
        Alert.alert("Login failed: invalid username or password");
      }

    } catch (error) {
      console.log("Error: ", error);
    }*/
  }

  render() {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.header}>
          Welcome!
        </Text>
        <TextInput 
          style={inputStyles.input} 
          placeholder="Username" 
          autoCapitalize="none"
          onChangeText={val => this.setState({username: val})}
        />
        <TextInput 
          style={inputStyles.input} 
          placeholder="Password" 
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.setState({password: val})}
        />
        <Button mode="contained" 
            uppercase= {false}
            style={buttonStyles.primary}
            onPress={this.login}>
            Login
        </Button>
        <View style={styles.bottomTextContainer}>
          <Text> 
            Don't have an account? 
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{color: '#6221ea', marginTop: 10}}> Sign up here</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
