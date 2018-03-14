import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import axios from 'axios'

import routes from '../../routes'
import image from '../../Images/header_logo.png'
import HomeListings from './HomeListings'
import Nav from '../Nav/Nav'


class Dashboard extends Component {
    
    render(){
        return(
            <div className = 'dashboard'>
            <Nav history = {this.props.history}/>
            Dashboard 
                <div>
                    <Link to = '/wizard/1'><button className = 'add-property'> Add new property </button></Link>
                </div>
                <div className = 'properties'>List properties with a "desired rent" greater than: $
                    <input className = 'desired-rent-input'/> 
                    <button className = 'filter'> Filter </button>
                    <button className = 'reset'> Reset </button>
                </div>
                <div className = 'home-listings'> Home Listings </div>
                <HomeListings/>
            </div>
        )
    }
}

export default Dashboard