import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from '../Nav/Nav'
class Step5 extends Component {
    
    render(){
        return(
            <div>
                <Nav history = {this.props.history}/>
                Add new listing 
                <Link to = '/'><button className = 'logout'>Logout</button></Link>
                <Link to = '/dashboard'><button className = 'logout'>Cancel</button></Link>
                <div className = 'step1'>Step 5</div>
                Recommended Rent 
                <div className = 'steps'> Desired Rent
                    <div><input/></div>
                </div>
                <div className = 'step-button'>
                    <Link to = '/wizard/4'><button>Previous Step</button></Link>
                    <Link to = '/dashboard'><button>Next Step</button></Link> 
                </div>
            </div>
        )
    }
}

export default Step5