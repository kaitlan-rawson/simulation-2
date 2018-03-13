import React, { Component } from 'react'
import axios from 'axios'
import image from '../../Images/auth_logo.png'


class Home extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleLogin(){
        axios.post('/api/login', {username: this.state.username, password: this.state.password})
        .then(res=>{
            if(res.data){
                this.props.history.push('/dashboard')
            } else {
                alert('Wrong username or password')
                this.setState({
                    username: '',
                    password: ''
                })
            }
        })
    }

    registerUser(){
        axios.post('/api/register', {username: this.state.username, password: this.state.password})
        .then(res=>{
            this.props.history.push('/dashboard')
        })
        .catch((err)=>{
            console.log(err)
            alert('Username taken')
            this.setState({
                username: '',
                password: ''
            })
        })
    }

    render(){
        return(
            <div className = 'houser'>
                <img className = 'home-logo' src = {image}/>
                <div className = 'username'> Username
                    <input name = 'username' type = 'email' onChange = {(e)=>this.handleInput(e)} value = {this.state.username}/>
                </div>
                <div className = 'password'> Password
                    <input name = 'password' type = 'password' onChange = {(e)=>this.handleInput(e)}  value = {this.state.password}/>
                </div>
                <button className = 'login' onClick = {()=>this.handleLogin()}> Login </button>
                <button className = 'register' onClick = {()=>this.registerUser()}> Register </button>
            </div>
        )
    }
}

export default Home