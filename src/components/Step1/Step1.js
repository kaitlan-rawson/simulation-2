import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updatePropertyNameDesc} from '../../ducks/reducer'
import axios from 'axios'

import Nav from '../Nav/Nav'

class Step1 extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            propertyName: '',
            propertyDesc: ''
        }
    }

        handleInput(e){
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleUpdate(){
            console.log(this.state.propertyDesc)
            this.props.updatePropertyNameDesc(this.state.propertyName, this.state.propertyDesc)
        }

    render(){
        return(
            <div>
                <Nav history = {this.props.history}/>
                Add a new Listing
                <Link to = '/dashboard'><button className = 'logout'>Cancel</button></Link>
                <div className = 'step1'>Step 1</div>
                <div className = 'steps'> Property Name 
                    <div><input name = 'propertyName' onChange = {(e)=>this.handleInput(e)} /></div>
                </div>
                <div className = 'steps'> Property Description 
                    <div><input name = 'propertyDesc' onChange = {(e)=>this.handleInput(e)}/></div>
                </div>
                <div className = 'step-button'>
                    <Link to = '/wizard/2'><button 
                        className = 'next-step'
                        onClick = {()=>this.handleUpdate()}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        propertyName: state.propertyName,
        propertyDesc: state.propertyDesc
    }

}
export default connect(mapStateToProps, {updatePropertyNameDesc})(Step1)