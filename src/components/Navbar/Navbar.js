import React from 'react'
import logo from '../Images/brand.jpg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            {/* NavBar branding */}
            <div className="nav-brand">
                <img className='nav-brand-img' src={logo} alt="branding" />
                <h3>TECH WORLD</h3>
            </div>


            <div className="nav-links">

                <ul className="nav-list">
                    <li className="list-items">HOME</li>
                    <li className="list-items">ABOUT</li>
                    <li className="list-items">CONTACT</li>
                    <li className="list-items">WRITE</li>
                </ul>

            </div>


            <div className="nav-right">
                <ul className='login-register-search'>
                    <li className="login-list-items search"><i class="fas fa-search"></i></li>
                    <li className="login-list-items login">LOGIN</li>
                    <li className="login-list-items register">REGISTER</li>

                </ul>
            </div>
        </div >
    )
}

export default Navbar
