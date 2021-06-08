import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className="Register">
            <div className="title">Register</div>
            <form className="Register-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="John Doe" />
                <label htmlFor="user-id">Email</label>
                <input type="email" id="user-id" placeholder="john@gmail.com" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
                <input type="button" value="Register" />
                <span className="already">Have an Account!!</span>
                <input type="button" value="Login" />
            </form>
        </div>
    )
}

export default Register
