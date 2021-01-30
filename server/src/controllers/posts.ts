import * as mongoose from 'mongoose'
import { Post } from '../db/models/post'
import { IPost } from '../interfaces/post'

interface result {
    statusCode: number,
    returnedValue: Object
}

function allPosts(req, res): result {
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
}

function getPost(req, post): result {
    const post = Post.findOne({ _id: req.params.postId }, (err: any, post: IPost | null) => {
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
}

function deletePost(post): result {
    const post = Post.findOne({ id: req.params.postId }, () => {
        res.send('Deleting post')
    })
}

function editPost(postID: string) {
    const post = Post.findOne({ _id: postID }, (err: mongoose.CallbackError, post: IPost | null) => {

    })
}