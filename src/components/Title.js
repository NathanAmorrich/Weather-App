import './App.css';
import React from 'react'

// Renders the title 
class Title extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: "", temp_unit: ""};
    }

    static getDerivedStateFromProps(props, state)
    {
        return {title: props.title};
    }

    render()
    {
        return(
            <div className = "wrapper_1">
                <div class="titleBlock"> 
                    {this.state.title}
                </div>
            </div>
        )
    }
}

export default Title;
