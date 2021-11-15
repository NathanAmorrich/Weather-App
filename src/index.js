import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*

ReactDOM.render(
  <React.StrictMode>
    <div className = "wrapper_1">
     <Title />
    <ResearchBar />
  </div>

  <div className = "wrapper_2">
    <div className ="Tallinn_pic" ></div>
    <CityCard city_name = "Tallinn"/>
    <CityCard city_name = "Paris"/>
    <div className ="Paris_pic"></div>
    <div className ="Berlin_pic"></div>
    <CityCard city_name = "Berlin"/>
    <Footer/>
    <div className ="Arcachon_pic"></div>
  </div>

  </React.StrictMode>,
  document.getElementById('root')
);

*/

