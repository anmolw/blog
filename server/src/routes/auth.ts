import express = require('express')
import passport from 'passport'

const router = express.Router()

router.post('/login', passport.authenticate('local'), (req, res) => {
    if (req.user) {
        res.send(200).json({ 'status': 'success' })
    }
    else {
        res.send(401).json({ 'status': 'failure' })
    }
})

router.post('/logout', (req, res) => {
    // Logout logic
})

export default router