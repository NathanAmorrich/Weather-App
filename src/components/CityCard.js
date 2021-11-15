import './App.css';
import React from 'react'

class CityCard extends React.Component {
    constructor(props)
    {
        super(props);
        this.API_Key = "900283061dee29af7cc06c8d4e71abd0";
        this.state = {city_name : "",
                    city_desc : "", 
                    city_temp : "", 
                    city_humidity : "", 
                    city_wind : "",
                    };
    }
    
    GetInfoAPI(city_searched){
        
        console.log("APICALL");
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            +city_searched
            +'&units=metric&appid='
            +this.API_Key
        )
        .then((response) => response.json())
        .then((data) => this.DisplayWeather(data));
       
    }
    
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

    render(){
        console.log("RENDER")
        
        return(
                <div className = "CityCard">
                    <h1 className="city_name">{this.state.city_name}</h1>
                    <p className = "city_desc">{this.state.city_desc}</p>
                    <p className = "city_temp">{this.state.city_temp} °C</p>
                    <p className = "city_humidity">Humidity : {this.state.city_humidity}%</p>
                    <p className = "city_wind">Wind speed : {this.state.city_wind} km/h</p>
                </div>

        );
    }

    componentDidMount()
    {
        setTimeout(() => this.GetInfoAPI(this.state.city_name),2000,this.render());
        //setTimeout(() => this.blocked(),5000,this.render());
    }
}

export default CityCard;