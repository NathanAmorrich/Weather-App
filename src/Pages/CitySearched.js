import React from "react";
import CityCard from "../components/CityCard";
import Title from "../components/Title";
import ReactDOM from 'react-dom';


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
                    <CityCard city_name = {this.state.cityName}/>
                    <div className ="Berlin_pic" style={{backgroundImage: "url('https://source.unsplash.com/500x400/?"+this.state.cityName+"')"}}></div>
                </div>
                

                
            </React.StrictMode>
        )
    }
    
}
export default CitySearched;