import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from '../Nav/Nav'

class Step3 extends Component {
    
    render(){
        return(
            <div>
                    <Nav history = {this.props.history}/>
                    <Link to = '/'><button className = 'logout'>Logout</button></Link>
                    <Link to = '/dashboard'><button className = 'logout'>Cancel</button></Link>
                IMAGE HERE
                <div className = 'steps'>
                    Image Url
                    <div><input/></div>
                </div>
                <div className = 'step-button'>
                    <Link to = '/wizard/2'><button>Previous Step</button></Link>
                    <Link to = '/wizard/4'><button>Next Step</button></Link> 
                </div>
            </div>
        )
    }
}

export default Step3