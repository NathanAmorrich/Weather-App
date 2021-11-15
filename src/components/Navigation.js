import './App.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">home_page</NavLink>
          <NavLink to="/about">city_page</NavLink>
          
       </div>
    );
}
 
export default Navigation;

