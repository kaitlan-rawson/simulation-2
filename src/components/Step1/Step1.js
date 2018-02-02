import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updatePropertyName, updatePropertyDesc } from '../../ducks/reducer'

class Step1 extends Component {
    
    handleOnClick(){
        
    }

    render(){
        return(
            <div>
                Add a new Listing
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
    return{
        updatePropertyName: state.updatePropertyName,
        updatePropertyDesc: state.updatePropertyDesc
    }

}
export default Step1