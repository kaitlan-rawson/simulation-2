import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Step2 extends Component {
    
    render(){
        return(
            <div>
                Add new listing 
                <Link to = '/'><button className = 'logout'>Logout</button></Link> 
                <Link to = '/dashboard'><button className = 'logout'>Cancel</button></Link>
                <div className = 'step1'>Step 2</div>
                <div className = 'steps'> Address 
                    <div><input/></div>
                </div>
                <div className = 'steps'> City
                    <div><input/></div>
                </div>
                <div className = 'steps'> State
                    <div><input/></div>
                </div>
                <div className = 'steps'> Zip
                    <div><input/></div>
                </div>
                <div className = 'step-button'>
                    <Link to = '/wizard/1'><button>Previous Step</button></Link>
                    <Link to = '/wizard/3'><button>Next Step</button></Link> 
                </div>
            </div>
        )
    }
}

export default Step2