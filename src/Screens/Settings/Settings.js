import React from 'react'
import './Settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import profile from '../../components/Images/pp.jpg'

const Settings = () => {
    return (
        <div className="settings-page">
            <div className="settings-container">
                <div className="heading">
                    <span className="update-account">Update Your Profile </span>
                    <span className="delete-account">Delete Profile </span>
                </div>
                <form className="settings-form">
                    <label>Profile Picture</label>
                    <div className="pp-section">
                        <img className="pp" src={profile} alt="Profile Picture" />
                        <label htmlFor="upload-pp"><i className=" upload-icon fas fa-user-circle"></i></label>
                        <input type="file" id="upload-pp" style={{ display: "none" }} />
                    </div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="John Doed" />
                    <label htmlFor="email-id">Email</label>
                    <input type="email" id="email-id" placeholder="johndoe@gmail.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" />
                    <input className="btn" type="submit" value="Update" />

                </form>
            </div>


            <Sidebar />
        </div>
    )
}

export default Settings
