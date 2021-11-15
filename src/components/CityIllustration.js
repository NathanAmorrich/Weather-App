import './App.css';
import React from 'react'

class CityIllustration extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {path : ""};
    }

    static getDerivedStateFromProps(props, state) {
        return {path: props.path};
    }

    render(){
        return(
            <div>
                {console.log(this.state.path)}
                <img src={this.state.path} alt="" width = "100" height = "100" ></img>
            </div>
        )
    }
}

export default CityIllustration;