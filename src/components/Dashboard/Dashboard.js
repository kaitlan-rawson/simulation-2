import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import axios from 'axios'

import routes from '../../routes'
import image from '../../Images/header_logo.png'
import HomeListings from './HomeListings'


class Dashboard extends Component {
    
    handleLogout(){
        axios.get('/api/logout')
            .then(res=>{
                this.props.history.push('/')
            })
    }
    render(){
        return(
            <div className = 'dashboard'>
            Dashboard 
                <button className = 'logout' onClick = {()=>this.handleLogout()}>Logout</button>
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