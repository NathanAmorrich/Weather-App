import React from 'react';
import Title from '../components/Title.js';
import ResearchBar from '../components/ResearchBar.js';
import CityCard from '../components/CityCard';
import Footer from '../components/Footer.js';
import CityIllustration from '../components/CityIllustration.js';
import reportWebVitals from '../reportWebVitals';

//Renders the components of the home page
class HomePage extends React.Component
{
  render()
  {
    return(
        <React.StrictMode>

          <div className = "wrapper_1">
            <Title title = "Welcome to the Weather App"/>
            <ResearchBar />
          </div>
      
          <div className = "wrapper_2">
            <div className = "Tallinn_pic"/> 
            <CityCard city_name = "Tallinn"/>
            <CityCard city_name = "Paris"/>
            <div className = "Paris_pic"/>
            <div className = "Berlin_pic"/>
            <CityCard city_name = "Berlin"/>
            <Footer/>
            <div className ="Arcachon_pic"></div>
        </div>
      
        </React.StrictMode>
    )
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default HomePage;

