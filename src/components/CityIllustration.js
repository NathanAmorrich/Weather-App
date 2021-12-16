import './App.css';
import React from 'react'

// Renders the city picture card according the city's name
class CityIllustration extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {city_name : ""};        
    }

    static getDerivedStateFromProps(props, state) 
    {
        return {city_name: props.city_name};
    }

    render()
    {
        return(
            <div className ="CityPic" id="CityPic">
            </div>
        )
    }

    componentDidMount()
    {
        var cityPic = document.getElementById("CityPic");
        cityPic.style.backgroundImage = "url('https://source.unsplash.com/500x400/?"+this.state.city_name+"')";  
    }
}

export default CityIllustration;