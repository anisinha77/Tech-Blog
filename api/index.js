import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './config/db.js'

dotenv.config()

connectDB();

const app = express()


app.listen('5000', () => {
    console.log("Listening to server 5000");
})