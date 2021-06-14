import React from 'react'
import './Register.css'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            })
            res.data && window.location.replace("/login")
        } catch (err) {
            // console.log(err)
            setError(true)
        }
    }
    return (
        <div className="Register">
            <div className="title">Register</div>
            <form className="Register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="John Doe" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="user-id">Email</label>
                <input type="email" id="user-id" placeholder="john@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Register" />
                {error && <span style={{ color: "red", marginTop: "10px", textAlign: "center", fontSize: "20px" }}>Something went wrong!!</span>}
                <span className="already">Already have an Account!!</span>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Register
