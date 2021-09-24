import { IUser } from './../@types/';
import { Schema, model } from 'mongoose';

const userSchema = new Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

export default model<IUser>('User', userSchema)