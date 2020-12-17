import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import '../css/Register_Login_Page.css'

export default class LoginPage extends Component {
    render() {
        return (
            <div id="LoginPage">
                <h2>Sign in</h2>
                <LoginForm/>
            </div>
        )
    }
}
