import express from 'express'
import Categories from '../models/Category.js'

const router = express.Router()

//add new category
router.post("/", async (req, res) => {
    const cat = new Categories(req.body)
    try {
        const savedCategory = await cat.save()
        res.status(200).json(savedCategory)
    } catch (err) {
        res.status(500).json(err)

    }
})


//fetch posts of all category
router.get("/", async (req, res) => {
    try {
        const cats = await Categories.find()
        res.status(200).json(cats)
    } catch (err) {
        res.status(500).json(err)

    }
})

export default router