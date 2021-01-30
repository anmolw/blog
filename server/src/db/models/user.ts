import * as mongoose from 'mongoose';
import { IUser } from '../../interfaces/user'

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    passwordHash: String
})

export const User = mongoose.model<IUser>('User', userSchema)
