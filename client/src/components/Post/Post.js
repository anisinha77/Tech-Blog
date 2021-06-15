import React from 'react'
import './Post.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import BlogImage from '../Images/BlogImage.jpg'

const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/"

    return (
        <Card className="card mb-3 my-3 p-3 rounded  shadow">
            {post.photo && (
                <Card.Img src={PF + post.photo} variant='top'></Card.Img>)}
            <Card.Body>
                <Link className="to-link" to={`/post/${post._id}`}>
                    <Card.Title className="blog-title">
                        <strong>{post.title}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
            <Card.Text className="text-secondary description">
                {post.description}
            </Card.Text>
        </Card>
    )
}

export default Post
