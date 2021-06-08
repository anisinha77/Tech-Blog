import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-title">ABOUT ME</div>
                <img className="author-image" src="https://findicons.com/files/icons/1580/devine_icons_part_2/128/account_and_control.png" alt="Author Photo" />
                <p className="bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quas adipisci atque ipsum nobis totam saepe harum id mollitia dignissimos.</p>
            </div>
            <div className="sidebar-container">
                <div className="sidebar-title">CATEGORIES</div>
                <ul className="cat-list">
                    <li className="cat-listItems">Web dev</li>
                    <li className="cat-listItems">Machine</li>
                    <li className="cat-listItems">Artificial</li>
                    <li className="cat-listItems">Competative</li>
                </ul>
            </div>
            <div className="sidebar-container">

                <div className="sidebar-title">FOLLOW US</div>
                <ul className="social-list">
                    <li className="social-listItems"><i class="fab fa-facebook-square"></i></li>
                    <li className="social-listItems"><i class="fab fa-twitter-square"></i></li>
                    <li className="social-listItems"><i class="fab fa-instagram-square"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
