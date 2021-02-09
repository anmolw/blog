import mongoose from 'mongoose'
import express = require('express')
import cors = require('cors')
import 'path'
import passport from 'passport'
import postsRouter from './routes/posts'
import usersRouter from './routes/auth'
import registerRouter from './routes/register'
import authStrategy from './lib/AuthStrategy'

const app = express()
const port = 3000

const db = mongoose.connect('mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Enable cross-origin resource sharing
app.use(cors())

passport.use(authStrategy)

// Register routers
app.use('/posts', postsRouter)
app.use('/auth', usersRouter)
app.use('/register', registerRouter)
