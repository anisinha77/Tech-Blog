import React from 'react'
import './Header.css'
import headImg from '../Images/header-img.jpg'

const Header = () => {
    return (
        <div className='header'>

            <div className="headerTitle">
                <div className="first">Daily Blogs</div>
                <div className="second">A Peak into Future.</div>
            </div>

            <div className="headImage">
                <img className="headerImage" src={headImg} alt="" />
            </div>

        </div>
    )
}

export default Header
