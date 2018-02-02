import React, { Component } from 'react'
import  { Link } from 'react-router-dom'

import routes from '../../routes'
import image from '../../Images/header_logo.png'


class Dashboard extends Component {
    
    render(){
        return(
            <div className = 'dashboard'>
            Dashboard 
                <Link to = '/'><button className = 'logout'>Logout</button></Link>
                <div>
                    <Link to = '/wizard/1'><button className = 'add-property'> Add new property </button></Link>
                </div>
                <div className = 'properties'>List properties with a "desired rent" greater than: $
                    <input className = 'desired-rent-input'/> 
                    <button className = 'filter'> Filter </button>
                    <button className = 'reset'> Reset </button>
                </div>
                <div className = 'home-listings'> Home Listings </div>
            </div>
        )
    }
}

export default Dashboard