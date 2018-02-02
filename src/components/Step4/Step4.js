import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Step4 extends Component {
    
    render(){
        return(
            <div>
                Add new listing
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