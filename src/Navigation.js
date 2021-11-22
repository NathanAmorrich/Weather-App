import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CitySearched from "./Pages/CitySearched";
import HomePage from "./Pages/HomePage";

// Manage the navigation from the first to the second page
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