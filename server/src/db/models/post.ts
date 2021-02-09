import mongoose from 'mongoose'
import { IPost } from '../../interfaces/post'

const PostSchema = new mongoose.Schema({
    title: { type: String },
    author: { type: String },
    // coverImage: string,
    body: { type: String },
    date: { type: Date, default: Date.now }
})

function validatePostJSON(post: Object): boolean {
    return true
}
export const Post = mongoose.model<IPost>('Post', PostSchema)
// export type PostModel = mongoose.Document & {
//     title: string,
//     coverImage: string,
//     content: string,
//     date: Date
// }