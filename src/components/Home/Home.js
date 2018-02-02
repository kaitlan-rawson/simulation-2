import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import image from '../../Images/auth_logo.png'


class Home extends Component {
    
    render(){
        return(
            <div className = 'houser'>
                <img className = 'home-logo' src = {image}/>
                <div className = 'username'> Username
                    <input id = 'username-input' type = 'email'/>
                </div>
                <div className = 'password'> Password
                    <input id = 'password-input' type = 'password'/>
                </div>
                <Link to = './dashboard'><button className = 'login'> Login </button></Link>
                <Link to = '/dashboard'><button className = 'register'> Register </button></Link>
            </div>
        )
    }
}

export default Home