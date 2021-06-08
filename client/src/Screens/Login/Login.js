import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="title">Login</div>
            <form className="login-form">

                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="john@gmail.com" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
                <input type="button" value="Login" />
                <span className="already">Don't have an account?</span>
                <input type="button" value="Register" />
            </form>
        </div>
    )
}

export default Login
