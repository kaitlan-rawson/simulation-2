import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Step5 extends Component {
    
    render(){
        return(
            <div>
                Add new listing
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