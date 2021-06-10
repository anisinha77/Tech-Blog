import express from 'express'
import mongoose from 'mongoose'
import User from '../models/User.js'
import Post from '../models/Post.js'
import bcrypt from 'bcrypt'

mongoose.set('useFindAndModify', false);

const router = express.Router();

//Update existting user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateduser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updateduser)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.json(401).json("Access denied")
    }
})

//delete user
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        const user = await User.findById(req.params.id)
        if (user) {
            try {
                await Post.deleteMany({ username: user.username })
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User deleted successfully")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(404).json("User doesn't exist")
        }

    } else {
        res.status(401).json("Access denied")
    }
})

//get single user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc
        res.status(200).json(others)

    } catch (err) {
        res.status(500).json(err)
    }

})

export default router