import './App.css';
import React from 'react'

// Renders the footer
class Footer extends React.Component{
    render()
    {
        return(
            
            <div class="footer">        
                <p>Author: Nathan Amorrich</p>
                <p><a href="mailto:namorric@tlu.ee">namorric@tlu.ee</a></p>
            </div>
        )
    }
}

export default Footer;