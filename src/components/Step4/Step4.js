import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from '../Nav/Nav'
class Step4 extends Component {
    
    render(){
        return(
            <div>
                <Nav history = {this.props.history}/>
                Add new listing
                <Link to = '/'><button className = 'logout'>Logout</button></Link>
                <Link to = '/dashboard'><button className = 'logout'>Cancel</button></Link>
                <div className = 'step1'>Step 4</div>
                <div className = 'steps'> Loan Amount
                    <div><input/></div>
                </div>
                <div className = 'steps'> Monthly Mortgage
                    <div><input/></div>
                </div>
                <div className = 'step-button'>
                    <Link to = '/wizard/3'><button>Previous Step</button></Link>
                    <Link to = '/wizard/5'><button>Next Step</button></Link> 
                </div>
            </div>
        )
    }
}

export default Step4