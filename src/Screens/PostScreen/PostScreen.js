import React from 'react'
import './PostScreen.css'
import Post from '../../components/PostScreenComponent'
import Sidebar from '../../components/Sidebar/Sidebar'

const PostScreen = () => {
    return (
        <div className="post-screen">
            <Post />
            <Sidebar />
        </div>
    )
}

export default PostScreen
