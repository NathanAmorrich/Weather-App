import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';

class CityCard extends Component {
    API_Key = "d78f4606c5ba94c8b3d176f95d59163a";
    state = {city_name : "",
                city_desc : "", 
                city_temp : "",
                temp_unit : "°C", 
                city_humidity : "", 
                city_wind : "",
                wind_unit : "km/h",
    };

    updateUnit = (temp_unit) => {
        this.setState({ temp_unit: temp_unit},  () =>this.GetInfoAPI(this.state.city_name))   
      }

    GetInfoAPI(city_searched, state)
    {
        console.log("HELLO API");
        if(this.state.temp_unit == "°C")
        {
         var unitAPICall = "metric";
         this.setState({wind_unit: "km/h"})
        } 
        else
        {
          var unitAPICall = "imperial";
          this.setState({wind_unit: "mph"})
        }
        
        fetch(
          'https://api.openweathermap.org/data/2.5/weather?q='
          +city_searched
          +'&units='+unitAPICall+'&appid='
          +this.API_Key
    
        )
        
        .then((response) => response.json())
        .then((data) => this.DisplayWeather(data));
    }

    //Set the data from the API to the state var
    DisplayWeather(data, props, state)
    {
        const{description} = data.weather[0];
        const{temp, humidity} = data.main;
        const{speed} = data.wind;

        this.setState({
            city_desc : description, 
            city_temp : temp,
            city_humidity : humidity,
            city_wind : speed});
    }
    
    static getDerivedStateFromProps(props, state) {
        return {city_name: props.city_name};
    }
    
    componentDidMount()
    {
        //Initial API call
        setTimeout(() => this.GetInfoAPI(this.state.city_name),1000,this.render());  
    }
    
    render() {
      console.log("HELLO Render");
      return (
         <View style = {styles.container}>
            <View style = {styles.containerTitle}>
                <Text style = {styles.title}>{this.state.city_name}</Text>
                <View style = {styles.containerPicker}>
                    <Text style = {styles.textUnit}>{this.state.temp_unit}</Text>
                    <Picker selectedValue = {this.state.temp_unit} onValueChange = {this.updateUnit}>
                        <Picker.Item label = "°C" value = "°C" />
                        <Picker.Item label = "°F" value = "°F" />
                    </Picker>
                </View>
             </View>
                <Text style = {styles.weatherInfo}>{this.state.city_desc}</Text>
                <Text style = {styles.weatherInfo}>{this.state.city_temp} {this.state.temp_unit}</Text>
                <Text style = {styles.weatherInfo}>Humidity: {this.state.city_humidity}%</Text>
                <Text style = {styles.weatherInfo}>Wind speed: {this.state.city_wind} {this.state.wind_unit}</Text>
            
        </View>                  
    )   }
}
export default CityCard

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgba(105, 105, 105, 0.7)',
      borderWidth: 0,
      borderRadius: 20,
      alignSelf: "center",
      justifyContent: 'center',
      margin: 15,
      width: 250,
      height: 150,
      flexDirection:"column",
   },

   containerTitle: {
    alignSelf: "center",
    flexDirection:"row",
 },
   title: {
    color: 'white',
    marginLeft: 10,
    textAlign: 'center',                
    borderWidth: 0,
    borderRadius: 20,
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
 },
   weatherInfo: {
      color: 'white',
      marginLeft: 10,
      textAlign: 'left',                
      borderWidth: 0,
      borderRadius: 20,
      fontSize: 15,
      fontFamily: 'Roboto',
   },
   containerPicker:{
    width: 30, height: 30,
    borderRadius: 20,
    backgroundColor: "white",
    marginLeft: 5,
    marginTop: 5,
    },
    textUnit: {
        color: 'grey'
    }  
})
