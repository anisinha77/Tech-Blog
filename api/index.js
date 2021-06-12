import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import postsRoute from './routes/posts.js'
import categoryRoute from './routes/categories.js'
import multer from 'multer'

const app = express()
dotenv.config()

app.use(express.json()) //allows to send json data

connectDB();

//storage file for storing images
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images")
    },
    filename: (req, file, callback) => {
        callback(null, "hello.jpeg")
    }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
})


//routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postsRoute)
app.use('/api/categories', categoryRoute)


app.listen('5000', () => {
    console.log("Listening to server 5000");
})