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
                <div className="sidebar-title">CATEGORIES</div>
                <ul className="cat-list">
                    {
                        cats.map((cat) => (
                            <Link key={cat._id} className="to-link" to={`/?cat=${cat.name}`}>
                                <li className="cat-listItems" >{cat.name}</li>
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
