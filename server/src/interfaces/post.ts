import mongoose from 'mongoose'

export interface IPost extends mongoose.Document {
    title: string,
    author: string,
    body: string,
    date: Date
}