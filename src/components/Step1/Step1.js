import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updatePropertyName, updatePropertyDesc } from '../../ducks/reducer'
import axios from 'axios'

class Step1 extends Component {
    

    render(){
        return(
            <div>
                Add a new Listing
                <Link to = '/'><button className = 'logout'>Logout</button></Link>
                <Link to = '/dashboard'><button className = 'logout'>Cancel</button></Link>
                <div className = 'step1'>Step 1</div>
                <div className = 'steps'> Property Name 
                    <div><input/></div>
                </div>
                <div className = 'steps'> Property Description 
                    <div><input/></div>
                </div>
                <div className = 'step-button'>
                    <Link to = '/wizard/2'><button 
                        className = 'next-step'>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        propertyName: state.propertyName,
    }

}
export default connect(mapStateToProps, {updatePropertyName,updatePropertyDesc})(Step1)