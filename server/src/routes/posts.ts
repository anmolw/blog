import express = require('express')
import * as mongoose from 'mongoose'
import { Post } from '../db/models/post'
import { IPost } from '../interfaces/post'

const router = express.Router()

router.get('/:postId', (req, res) => {
    const post = Post.findOne({ _id: req.params.postId }, (err: mongoose.CallbackError, post: IPost | null) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            if (post === null) {
                res.status(404)
            }
            else {
                res.status(200).send(post.toJSON())
            }
        }
    })
})

router.get('/', (req, res) => {
    const allPosts = Post.find((err, docs) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send(docs.map((post) => {
                return post.toJSON()
            }))
        }
    })
})

router.put('/:postId', (req, res) => {
    const post = Post.findOne({ _id: req.params.postId }, (err: mongoose.CallbackError, post: IPost | null) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            if (post === null) {
                res.send(404)
            }
            else {
                res.send(post.toJSON())
            }
        }
    })
})

router.delete('/:postId', (req, res) => {
    const post = Post.findOne({ id: req.params.postId }, () => {
        res.send('Deleting post')
    })
})

router.post('/new', (req, res) => {
    // Make a new post
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
    })
    post.save((err) => {
        if (!err) {
            res.status(200)
        }
        else {
            res.status(500)
        }
    })
})

export default router