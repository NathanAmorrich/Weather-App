import './App.css';
import React from 'react'

//Renders the city info card
class CityCard extends React.Component {
    constructor(props)
    {
        super(props);
        this.API_Key = "d78f4606c5ba94c8b3d176f95d59163a";
        this.state = {city_name : "",
                    city_desc : "", 
                    city_temp : "",
                    temp_unit : "°C", 
                    city_humidity : "", 
                    city_wind : "",
                    wind_unit : "km/h",
                    };
    
        this.handleChange = this.handleChange.bind(this);
    }

    //Get the option selected and refresh the data with the new unit
    handleChange(event)
    {
        this.setState({temp_unit: event.target.value}, () => this.GetInfoAPI(this.state.city_name),);    
    }
    
    // OpenWeather API call
    GetInfoAPI(city_searched, state)
    {
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

    render()
    {
        return(
                <div className = "CityCard" id='CityCard'>
                    <h1 className="city_name">{this.state.city_name}</h1>
                    <select class = "units_list" id = "units_list" onChange={this.handleChange}>
                        <option value="°C">°C</option>
                        <option value="°F">°F</option>
                    </select>
                    <p className = "city_desc">{this.state.city_desc}</p>
                    <p className = "city_temp">{this.state.city_temp} {this.state.temp_unit} </p>
                    <p className = "city_humidity">Humidity : {this.state.city_humidity}%</p>
                    <p className = "city_wind">Wind speed : {this.state.city_wind} {this.state.wind_unit}</p>
                </div>
        );
    }

    componentDidMount()
    {
        //Initial API call
        setTimeout(() => this.GetInfoAPI(this.state.city_name),1000,this.render());  
    }
}

export default CityCard;