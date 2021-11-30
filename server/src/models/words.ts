import { IWord } from '../@types'
import { Schema, model } from 'mongoose'

const wordsSchema = new Schema(
    {
        word: {
            type: String,
            unique: true,
            lowercase: true,
        },
        translate: {
            type: String,
            unique: true,
            lowercase: true,
        },
        audio: {
            type: String,
        },
        avatar: {
            type: String,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

wordsSchema.index({ word: 'text' })

export default model<IWord>('Word', wordsSchema)
