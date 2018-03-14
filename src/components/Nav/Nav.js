import React, { Component } from 'react'
import axios from 'axios'
class Nav extends Component {
    
    handleLogout(){
        axios.get('/api/logout')
            .then(res=>{
                this.props.history.push('/')
            })
    }

    render(){
        return(
            <div>
                Houser Dashboard
                <button onClick = {()=>this.handleLogout()}> Logout </button> 
            </div>
        )
    }
}

export default Nav