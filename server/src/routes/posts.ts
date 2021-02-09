import express = require('express')
import mongoose from 'mongoose'
import { Post } from '../db/models/post'
import { IPost } from '../interfaces/post'

const router = express.Router()

router.get('/', (req, res) => {
    // Get all posts
    Post.find().then((posts) => {
        res.send(posts.map((post) => post.toJSON()))
    }).catch((err) => {
        res.status(500).json({ 'status': 'error' })
        console.error(err)
    })
})

router.get('/:postId', (req, res) => {
    // Get a specific post
    Post.findOne({ _id: req.params.postId }).then((post) => {
        if (post === null) {
            res.status(404).json({ 'status': 'notfound' })
        }
        else {
            res.status(200).json(post.toJSON())
        }
    }).catch((err) => {
        res.status(500).json({ 'status': 'error' })
        console.error(err)
    });
})

router.put('/:postId', (req, res) => {
    // Edit an existing post
    const newDoc = {
        title: req.body.title,
        body: req.body.body
    }
    Post.findOneAndUpdate({ _id: req.body.id }, newDoc).then((post) => {
        if (post === null) {
            res.status(404).json({ 'status': 'notfound' })
        }
        else {
            res.status(200).json({ 'status': 'success' })
        }
    }).catch((err) => {
        res.status(500).json({ 'status': 'error' })
        console.error(err)
    })
})

router.delete('/:postId', (req, res) => {
    // Delete a post
    Post.findOneAndRemove({ _id: req.params.postId }, { useFindAndModify: false }).then((post) => {
        if (post === null) {
            res.status(404).json({ 'status': 'notfound' })
        }
        else {
            res.status(200).json({ 'status': 'success' })
        }
    }).catch((error) => {
        res.status(500).json({ 'status': 'error' })
        console.error(error)
    })
})

router.post('/new', (req, res) => {
    // Make a new post
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
    })
    post.save().then((post) => {
        res.status(200).json({ 'status': 'success' })
    }).catch((err) => {
        res.status(500).json({ 'status': 'error' })
        console.error(err)
    })
})

export default router