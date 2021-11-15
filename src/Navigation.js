import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import CitySearched from "./Pages/CitySearched";
import HomePage from "./Pages/HomePage";

function Navigation(){
    return(
        <Router>
          <Routes>
            <Route path ="/" element ={<HomePage/>} />
            <Route path ="CitySearched" element ={<CitySearched/>} />
          </Routes>
    </Router>
    );
}

export default Navigation;