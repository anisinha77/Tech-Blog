import React from 'react'
import './Sidebar.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [cats, setcats] = useState([])

    useEffect(() => {
        const fetchCats = async () => {
            const fetchedCats = await axios.get("/categories")
            // console.log(fetchedCats)
            setcats(fetchedCats.data)
        }
        fetchCats()
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-title">ABOUT ME</div>
                <img className="author-image" src="https://findicons.com/files/icons/1580/devine_icons_part_2/128/account_and_control.png" alt="Author" />
                <p className="bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quas adipisci atque ipsum nobis totam saepe harum id mollitia dignissimos.</p>
            </div>
            <div className="sidebar-container">
                <div className="sidebar-title">CATEGORIES</div>
                <ul className="cat-list">
                    {
                        cats.map((cat) => (
                            <Link className="to-link" to={`/?cat=${cat.name}`}>
                                <li className="cat-listItems">{cat.name}</li>
                            </Link>
                        ))
                    }

                </ul>
            </div>
            <div className="sidebar-container">

                <div className="sidebar-title">FOLLOW US</div>
                <ul className="social-list">
                    <li className="social-listItems"><i className="fab fa-facebook-square"></i></li>
                    <li className="social-listItems"><i className="fab fa-twitter-square"></i></li>
                    <li className="social-listItems"><i className="fab fa-instagram-square"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
