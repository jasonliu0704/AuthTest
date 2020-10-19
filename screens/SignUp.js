import React from 'react';
import { Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { styles, buttonStyles, inputStyles } from '../styles'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '', 
      password: '',
    }
  }

  validatePWlength = () => {
    if (this.state.password.length >=8 ) {
      this.validateUsername()
    } else {
      Alert.alert("Your password must has at least 8 characters");
    }
  }

  validateUsername = async () => {
    const { username, password } = this.state
    let url = "http://localhost:8080/auth/validateUser/"+username

    try {
      const response = await fetch(url, {method: 'GET'})
 
      if (response.status === 200) {
        this.props.navigation.navigate('SignUpCont',  { username: username, password: password});
      } else {
        Alert.alert("Username is registered");
      }

    } catch (error) {
      console.log("Error: ", error)
    }
  }

  render() {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.header}>
          Sign Up
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
          maxLength={30}
          onChangeText={val => this.setState({password: val})}
        />
        <Button mode="contained" 
            uppercase= {false}
            style={buttonStyles.primary}
            onPress={this.validatePWlength}>
            Next
        </Button>
        <View style={styles.bottomTextContainer}>
          <Text> 
            Already has an account? 
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{color: '#6221ea', marginTop: 10}}> Back to login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
