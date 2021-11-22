import { IWord } from '../@types'
import { Schema, model } from 'mongoose'

const wordsSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
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
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

wordsSchema.index({ word: 'text' })

export default model<IWord>('Words', wordsSchema)
