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
        verify: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        timestamps: true,
    },
)
wordsSchema.index({ verify: 'text' })
wordsSchema.index({ word: 'text' })

export default model<IWord>('Word', wordsSchema)
