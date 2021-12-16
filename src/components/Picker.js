import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';

class PickerTemp extends Component {
   state = {temp_unit: "°C"}
   updateUser = (temp_unit) => {
      this.setState({ temp_unit: temp_unit},  () =>console.log(this.state.temp_unit))   
    }

   render() {
      return (
         <View style = {styles.containerPicker}>
            <Text style = {styles.textUnit}>{this.state.temp_unit}</Text>
            <Picker selectedValue = {this.state.temp_unit} onValueChange = {this.updateUser}>
               <Picker.Item label = "°C" value = "°C" />
               <Picker.Item label = "°F" value = "°F" />
            </Picker>
         </View>
      )   }}
export default PickerTemp

const styles = StyleSheet.create({
    containerPicker:{
        width: 30,  
        height: 30,
        backgroundColor: "white",
        borderRadius: 20,
        textAlign: "center"
    },
    textUnit: {
        marginTop: 8,
        fontSize: 15,
        alignSelf: 'center',
        color: 'grey'   
    }})