import { Document, ObjectId } from 'mongoose'

export interface IUser extends Document {
    _id: string
    name: string
    email: string
    password: string
    avatar: string
}

export interface IWord extends Document {
    word: string
    translate: string
    _id: ObjectId | null
}

export interface Results {
    totalCount: Result
    next: Result
    previous: Result
    results: any
}

interface Result {
    page: number
    limit: number
    totalCount: number
}

declare global {
    namespace Express {
        interface Response {
            paginationResults?: Results
        }
    }
}
