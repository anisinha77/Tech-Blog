import React from 'react'
import './Header.css'
import headImg from '../Images/header-img.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img src={headImg} alt="" />
            <div className="headerTitle">
                <h1>Daily Blogs</h1>
                <p>A Peek into Future</p>
            </div>
        </div>
    )
}

export default Header
