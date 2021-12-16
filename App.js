import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import CitySearched from './src/Pages/CitySearched.js';
import HomePage from './src/Pages/HomePage.js';

export default class App extends Component{
    render(){
        return (
          <Router>
            <Stack key="root">
              <Scene key="Home" component={HomePage} title="Home" />
              <Scene key="CitySearched" component={CitySearched} title="CitySearched" />
            </Stack>
           </Router>
   );
}}
