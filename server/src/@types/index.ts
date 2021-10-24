import { Document } from 'mongoose'

export interface IUser extends Document {
    email: string
    password: string
}

export interface IWord extends Document {
    dig_word: string
    rus_word: string
}
