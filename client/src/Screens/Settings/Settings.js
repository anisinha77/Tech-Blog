import React, { useContext, useState } from 'react'
import './Settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Context } from '../../context/Context'
// import profile from '../../components/Images/pp.jpg'
import axios from 'axios'

const Settings = () => {
    const PF = "http://localhost:5000/images/"

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context)

    const handleUpdate = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    const handleDelete = async () => {
        try {
            // console.log(`${user._id}`)
            await axios.delete(`/users/${user._id}`, {
                data: { userId: user._id }

            })
            dispatch({ type: "LOGOUT" })
            // window.location.replace("/")
        } catch (error) {

        }
    }

    return (
        <div className="settings-page">
            <div className="settings-container">
                <div className="heading">
                    <span className="update-account">Update Your Profile </span>
                    <span className="delete-account" onClick={handleDelete}>Delete Profile </span>
                </div>
                <form className="settings-form" onSubmit={handleUpdate} >
                    <label>Profile Picture</label>
                    <div className="pp-section">
                        <img className="pp" src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="Profile" />
                        <label htmlFor="upload-pp"><i className=" upload-icon fas fa-user-circle"></i></label>
                        <input type="file" id="upload-pp" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="John Doed" onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="email-id">Email</label>
                    <input type="email" id="email-id" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input className="btn" type="submit" value="Update" />
                    {success && (
                        <span
                            style={{ color: "green", textAlign: "center", marginTop: "20px" }}
                        >
                            Profile has been updated...
                        </span>
                    )}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
