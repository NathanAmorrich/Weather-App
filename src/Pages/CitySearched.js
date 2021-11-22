import React from "react";
import Title from "../components/Title";
import CityCard from '../components/CityCard';
import CityIllustration from "../components/CityIllustration";

//Renders the city searched page
class CitySearched extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {cityName:  localStorage.getItem('city_name')};
    }
    render()
    {
       
        return(
            <React.StrictMode>
                
                <div className = "wrapper_1">
                    <Title title = {"Weather in "+this.state.cityName}/>
                </div>

                <div className = "wrapper_2">
                    <CityIllustration city_name = {this.state.cityName}/>
                    <CityCard city_name = {this.state.cityName}/>
                </div>
                
            </React.StrictMode>
        )
    }
    
}
export default CitySearched;