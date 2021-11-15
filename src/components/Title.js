import './App.css';
import React from 'react'

class Title extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: ''};
    
    }

    static getDerivedStateFromProps(props, state) {
        return {title: props.title};
    }

    render(){
        return(
            <div className = "wrapper_1">
                <div class="titleBlock"> 
                        {this.state.title}
                        <select name="units_list" id="units_list">
                            <option value="°C">°C</option>
                            <option value="°F">°F</option>
                        </select>
                </div>
            </div>
        )
    }
}

export default Title;
