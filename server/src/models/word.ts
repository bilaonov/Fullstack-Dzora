import { IWord } from './../@types/';
import { Schema, model } from 'mongoose';

const wordSchema = new Schema ({
    dig_word: {type: String, unique: true, lowercase: true},
    rus_word: {type: String, unique: true, lowercase: true},
})



export default model<IWord>('Word', wordSchema)