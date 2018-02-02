import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Step3 extends Component {
    
    render(){
        return(
            <div>
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