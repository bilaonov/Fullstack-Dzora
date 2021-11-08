import { IUser } from './../@types/'
import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

export default model<IUser>('User', userSchema)
