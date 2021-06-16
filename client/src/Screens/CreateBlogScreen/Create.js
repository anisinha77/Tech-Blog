import React, { useContext, useState } from 'react'
import './Create.css'
// import FormImage from '../../components/Images/FormImage.jpg'
import { Context } from '../../context/Context'
import axios from 'axios'

const Create = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [categories, setCategories] = useState("")
    const [file, setFile] = useState("")
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description,
            categories
        }


        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post("/upload", data)
            } catch (error) {

            }
        }
        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace("/post/" + res.data._id)

        } catch (error) {

        }
    }

    return (
        <div className="blog-form">
            {file &&
                (<img className="uploaded-img" src={URL.createObjectURL(file)} alt="Blog" />)}
            <form className="create-form" onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="imageFile">
                        <i className="upload-img-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="imageFile" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                    <input placeholder="Title" className="blog-title" type="text" id="title" autoFocus={true}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-container">
                    <input placeholder="Categories" className="blog-title" type="text" id="categories"
                        onChange={(e) => setCategories(e.target.value)} />
                    <textarea className="blog-desc" placeholder="Tell your story...."
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Publish" className="create-submit" />
            </form>
        </div>
    )
}

export default Create
