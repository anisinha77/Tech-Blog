import React from 'react'
import './Login.css'
import { useRef, useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }

    // console.log(isFetching)
    return (
        <div className="login">
            <div className="title">Login</div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="username" ref={userRef} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="login-button " placeholder="Password" ref={passwordRef} />
                <input type="submit" className="login-submit" value="Login" disabled={isFetching} />
                <span className="already">Don't have an account?</span>
                {/* <input type="button" className="login-submit" value="Register" /> */}
                <Link to="/register"> <button className="login-submit">Register</button></Link>
            </form>
        </div>
    )
}

export default Login
