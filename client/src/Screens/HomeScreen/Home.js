import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'
import axios from 'axios'
import { useLocation } from 'react-router'

const Home = () => {
    const [posts, setposts] = useState([])

    const { search } = useLocation()


    useEffect(() => {
        const fetchposts = async () => {
            const res = await axios.get("/posts" + search)
            // console.log(res)
            setposts(res.data)
        }
        fetchposts()
    }, [search])
    return (
        <>
            <Header />
            <div className="home-screen">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
