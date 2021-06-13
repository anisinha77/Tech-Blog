import React from 'react'
import './index.css'
// import BlogImage from '../Images/BlogImage.jpg'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    let location = useLocation();
    const path = location.pathname.split("/")[2]
    // console.log(path)

    const [post, setpost] = useState({})

    useEffect(() => {
        const fetchpost = async () => {
            const res = await axios.get("/posts/" + path)
            // console.log(res)
            setpost(res.data)
        }
        fetchpost()
    }, [path])

    return (
        <div className="post-screen">
            <div className="post-container">
                {post.photo &&
                    (<img className="post-image" src={post.photo} alt="Post Blog" />)}
                <h2 className="post-title">
                    <strong>{post.title}</strong>
                    <div className="edit-delete">
                        <span className="edit-icon"><i className="far fa-edit"></i></span>
                        <span className="delete-icon"><i className="far fa-trash-alt"></i></span>
                    </div>
                </h2>
                <div className="info">
                    <div className="post-details">
                        <div>Author : <Link className="to-link" to={`/?user=${post.username}`}>{post.username}</Link></div>
                        <div>Created : {new Date(post.createdAt).toDateString()}</div>
                    </div>
                    <div className="description">
                        {post.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
