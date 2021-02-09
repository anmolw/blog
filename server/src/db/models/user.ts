import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import { IUser } from '../../interfaces/user'

interface IUserDoc extends IUser {
    passwordMatches(password: string): Promise<boolean>
}

const userSchema = new mongoose.Schema<IUserDoc>({
    email: { type: String, index: { unique: true }, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
})


interface IUserModel extends mongoose.Model<IUserDoc> {
}

function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
}

userSchema.methods.passwordMatches = function (password: string) {
    return bcrypt.compare(password, this.password.toString())
}

userSchema.pre("save", function (this, next) {
    if (this.password && (this.isModified('password') || this.isNew)) {
        hashPassword(this.password.toString()).then((passwordHash) => {
            this.password = passwordHash
            next()
        }).catch((error) => {
            console.error(error)
        })
    }
})

export const User = mongoose.model<IUserDoc, IUserModel>('User', userSchema)
