import React, { useContext } from 'react'
import './index.css'
// import BlogImage from '../Images/BlogImage.jpg'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

const Index = () => {


    const { user } = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [updateMode, setUpdateMode] = useState(false)


    let location = useLocation();
    const path = location.pathname.split("/")[2]
    // console.log(path)

    const [post, setpost] = useState({})

    useEffect(() => {
        const fetchpost = async () => {
            const res = await axios.get("/posts/" + path)
            // console.log(res)
            setpost(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
        }
        fetchpost()
    }, [path])


    //delete post
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            })
            window.location.replace("/")

        } catch (error) {

        }
    }

    //update post 
    const handleEdit = (e) => {
        setUpdateMode(true)
    }
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username, title, description
            })
            // setUpdateMode(false)
            window.location.reload()
        } catch (error) {

        }
    }

    return (
        <div className="post-screen">
            <div className="post-container">
                {post.photo &&
                    (<img className="post-image" src={PF + post.photo} alt="Post Blog" />)}

                {
                    updateMode ? <input type="text" value={title} className="title-input" autoFocus onChange={(e) => setTitle(e.target.value)} /> :
                        (<h2 className="post-title">
                            <strong>{post.title}</strong>
                            {post.username === user?.username &&

                                <div className="edit-delete">
                                    <span className="edit-icon" onClick={handleEdit}><i className="far fa-edit"></i></span>
                                    <span className="delete-icon"><i className="far fa-trash-alt" onClick={handleDelete}></i></span>
                                </div>
                            }
                        </h2>)
                }
                <div className="info">
                    <div className="post-details">
                        <div>Author : <Link className="to-link" to={`/?user=${post.username}`}>{post.username}</Link></div>
                        <div>Created : {new Date(post.createdAt).toDateString()}</div>
                    </div>
                    {
                        updateMode ? <textarea className="desc-input" value={description} onChange={(e) => setDescription(e.target.value)}></textarea> :
                            (<div className="description">
                                {post.description}
                            </div>)
                    }
                    {
                        updateMode &&
                        <button className="update-button" onClick={handleUpdate}>Update</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Index
