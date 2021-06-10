import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'

const app = express()
dotenv.config()

app.use(express.json())

connectDB();


app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)


app.listen('5000', () => {
    console.log("Listening to server 5000");
})