import { Document, ObjectId } from 'mongoose'

export interface IUser extends Document {
    email: string
    password: string
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
