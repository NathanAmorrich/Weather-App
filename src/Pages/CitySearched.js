import React, { Component } from "react";
import {ImageBackground, View, StyleSheet, Text, ScrollView, Button} from "react-native";
import Title from "../components/Title"
import ResearchBar from "../components/ResearchBar";
import CityCard from "../components/CityCard";
import { Router, Scene, Stack } from 'react-native-router-flux';
import { TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CitySearched extends React.Component
{
  constructor(props){  
    super(props);  
    this.state = {  
      cityName: "" 
      }
    }  
      

    getMyStringValue = async () => 
    {  try 
      { 
        console.log("CS "+ await AsyncStorage.getItem('@CitySearchedName'))   
        this.setState({cityName: await AsyncStorage.getItem('@CitySearchedName')}, () => this.render() )
     } 
      catch(e) {    // read error  
      }
    }

    getMyStringValue2 = async () => 
    {  
      try
        { 
          console.log("CS "+ await AsyncStorage.getItem('@CitySearchedName'))
          return await AsyncStorage.getItem('@CitySearchedName')
        }  
      catch(e) 
        {    // read error  
        }
    }
  
  componentDidMount()
  {
      //Initial API call
      this.getMyStringValue();  
  }
  

  render()
  {
    console.log("RENDER "+this.state.cityName)
      return (  
        <View  style={styles.container}>
          <ImageBackground source={require('../pictures/back4.jpg')} resizeMode="cover" style={styles.image}>
          <Title title={'Weather in '+this.state.cityName}/>
          <CityCard city_name = {this.state.cityName}/>
          </ImageBackground>
        </View> 
    
      )
  }
}
export default CitySearched;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  title: {
    flex: 0.2,
    backgroundColor: 'rgba(105, 105, 105, 0.7)',
    borderWidth: 0,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text:{
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
});


 


