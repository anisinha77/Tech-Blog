import React from 'react'
import './Create.css'
import FormImage from '../../components/Images/FormImage.jpg'

const Create = () => {
    return (
        <div className="blog-form">
            <img className="uploaded-img" src={FormImage} alt="Blog" />
            <form className="create-form">
                <div className="form-container">
                    <label htmlFor="imageFile">
                        <i class="upload-img-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="imageFile" style={{ display: 'none' }} />
                    <input placeholder="Title" className="blog-title" type="text" id="title" autoFocus={true} />
                </div>
                <div className="form-container">
                    <textarea className="blog-desc" placeholder="Tell your story...."></textarea>
                </div>
                <button className="publish-btn">Publish</button>
            </form>
        </div>
    )
}

export default Create
