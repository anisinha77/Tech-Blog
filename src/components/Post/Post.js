import React from 'react'
import './Post.css'
import { Card } from 'react-bootstrap'
import BlogImage from '../Images/BlogImage.jpg'

const Post = () => {
    return (
        <Card className="card mb-3 my-3 p-3 rounded  shadow">
            <Card.Img src={BlogImage} variant='top'></Card.Img>
            <Card.Body>
                <Card.Title className="blog-title">
                    <strong>This is title of post</strong>
                </Card.Title>
            </Card.Body>
            <Card.Text className="text-secondary description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ipsum laudantium dolore deserunt fugit mollitia, nulla autem tempore optio itaque delectus, tenetur laboriosam amet accusamus, quaerat suscipit voluptatum enim odio? Dolore unde suscipit aliquid molestias assumenda dicta, quam sint ipsa animi in quidem consequuntur facere doloribus officia neque doloremque. Praesentium.
            </Card.Text>
        </Card>
    )
}

export default Post
