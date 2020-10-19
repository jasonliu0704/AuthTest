import React from 'react';
import { AsyncStorage, View, ActivityIndicator, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
      fontSize: 30,
      margin: 50,
  },
  bottomTextContainer: {
      marginTop: 150,
      marginBottom: 50,
      alignItems: 'center',
  },
})

const buttonStyles = StyleSheet.create({
  primary: {
      margin: 20,
      width: 200,
      paddingVertical: 5,
  },
})

const inputStyles = StyleSheet.create({
  input: {
      width: 300,
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'grey'
  },
})

export {styles, buttonStyles, inputStyles}