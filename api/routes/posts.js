import express from 'express'
import Post from '../models/Post.js'

const router = express.Router()

//create new post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, {
                    new: true
                })

                res.status(200).json(updatedPost)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can only modify your post")
        }

    } catch (err) {
        res.status(500).json(err)
    }

})


//deleted post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            await post.delete()
            res.status(200).json("Post deleted successfully")
        } else {
            res.status(401).json("You can only delete your post.")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//get single post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

//fetch posts according to category and person
router.get("/", async (req, res) => {
    const username = req.query.user
    const catname = req.query.cat
    try {
        let posts
        if (username) {
            posts = await Post.find({ username })
        }
        else if (catname) {
            posts = await Post.find({
                categories: {
                    $in: [catname]
                }
            })
        }
        else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
    }

})


export default router