import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import About from '../../About.js';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Inputs extends Component {
   state = {
      value: ''
    }

   HandleValue = (text) => {
    this.setState({ value: text })   
    }

    HandleStorage = (value) => {
      console.log(this.state.value)
      AsyncStorage.setItem('@CitySearchedName', this.state.value)
      Actions.CitySearched()  
    }
        
    render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}               
                underlineColorAndroid = "transparent"
                placeholder = "Enter a location"
                placeholderTextColor = "grey"
                alignSelf= "center"
                autoCapitalize = "none"
                onChangeText = {this.HandleValue}/>
            <TouchableOpacity style = {styles.submitButton} onPress = {() => this.HandleStorage(this.state.value)}>
                <Text style = {styles.submitButtonText}> Submit </Text>  
            </TouchableOpacity>
        </View>                  
    )   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgba(105, 105, 105, 0.7)',
      borderWidth: 0,
      borderRadius: 20,
      alignSelf: "center",
      justifyContent: 'center',
      margin: 15,
      width: 300,
      height: 90,
      flexDirection:"row",
   },
   input: {
      backgroundColor: "white",
      color: 'black',

      textAlign: 'center',
          
      width: 200,
      height: 40,
      
      borderWidth: 0,
      borderRadius: 20,
   },
   submitButton: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    width: 50,
    height: 40,  
    borderWidth: 0,
    borderRadius: 20,
   },
   submitButtonText:{
      color: 'black',
   }
})
