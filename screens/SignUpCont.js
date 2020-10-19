import React from 'react';
import { AsyncStorage, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { styles, buttonStyles, inputStyles } from '../styles'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
//import * as s3 from '../s3Utils'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      profileUri: '',
      pickedImage: false,
    }
  }

  componentDidMount() {
    this.setState({username: this.props.navigation.getParam('username')});
    this.setState({password: this.props.navigation.getParam('password')});
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      } else {
        this.chooseImage();
      }
    }
  };

  chooseImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ profileUri: result.uri });
        this.setState({ pickedImage: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  login = async () => {
    const { username, password } = this.state

    let url = "http://localhost:8080/auth/login?username="+username+"&password="+password
  
    try {
      const response =  await fetch(url, {method: 'POST'})
      
      if (response.status === 200) {
        const userData = await response.json();

        await AsyncStorage.setItem('userToken', response.headers.map.authorization);
        await AsyncStorage.setItem('userObject', JSON.stringify(userData));
        //todo
        //await s3.uploadImage(this.state.profileUri, userData.ID)

        this.props.navigation.navigate('App');
      } else {
        Alert.alert("Internal server error, please try again");
      }

    } catch (error) {
      console.log("Error: ", error);
    } 
  }

  signUp = async () => {
    const { username, password, firstName, lastName, email, phoneNumber } = this.state

    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          password: password,
          phone: phoneNumber,
          email: email,
          username: username,
        })
      })

      if (response.status === 200) {
        this.login();
      } else {
        Alert.alert("Email is already registered");
      }

    } catch (error) {
      console.log("Error: ", error);
    }
  }

  render() {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.header}>
          Set Up Your Profile
        </Text>
        <TouchableOpacity 
          onPress={this.getPermissionAsync}
        >
          {this.state.pickedImage? 
          <Avatar.Image size={100} 
          style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            backgroundColor: '#bdbdbd',
            shadowRadius: 5,
            shadowOpacity: 0.5,
            marginBottom: 15,
          }}
          source={{uri: this.state.profileUri}} 
          />:
          <Avatar.Icon size={100} 
            icon="account" 
            backgroundColor= '#bdbdbd'
            style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowRadius: 5,
            shadowOpacity: 0.5,
            marginBottom: 15,
          }}
          />}
        </TouchableOpacity>
        <TextInput 
          style={inputStyles.input} 
          placeholder="First name" 
          autoCapitalize="none"
          onChangeText={val => this.setState({firstName: val})}
        />
        <TextInput 
          style={inputStyles.input} 
          placeholder="Last name" 
          autoCapitalize="none"
          onChangeText={val => this.setState({lastName: val})}
        />
        <TextInput 
          style={inputStyles.input} 
          placeholder="Email" 
          autoCapitalize="none"
          onChangeText={val => this.setState({email: val})}
        />
        <TextInput 
          style={inputStyles.input} 
          placeholder="Phone number" 
          autoCapitalize="none"
          onChangeText={val => this.setState({phoneNumber: val})}
        />
        <Button mode="contained" 
            uppercase= {false}
            style={buttonStyles.primary}
            onPress={this.signUp}>
            Next
        </Button>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{fontSize: 16, color: '#808080', fontWeight: '500'}}> Go Back </Text>
          </TouchableOpacity>
      </View>
    )
  }
}