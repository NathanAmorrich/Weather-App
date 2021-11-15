import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate, History} from 'react-router-dom'
import CitySearched from '../Pages/CitySearched';


class ResearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
    }

    SaveCityName()
    {
        localStorage.setItem("city_name", this.state.value);
    }

    handleChange(event) {    
        this.setState({value: event.target.value});
        
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault(); 
    }

    render(){
        return(
            <div className = "wrapper_1">
                <div class="researchBlock">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"  onChange={this.handleChange} value={this.state.value} placeholder="Enter a location" class="InputValue"/>    
                        <Link to="/CitySearched">
                            <button onClick={this.SaveCityName()}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default ResearchBar;