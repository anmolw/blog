import express = require('express')
import { User } from '../db/models/user'

const router = express.Router()

router.post('/', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    }).save().then((userDoc) => {
        if (userDoc) {
            res.status(200).json({ 'status': 'success' })
        }
    }).catch((error) => {
        res.status(500).json({ 'status': 'failure' })
        console.error(error)
    })
})

export default router