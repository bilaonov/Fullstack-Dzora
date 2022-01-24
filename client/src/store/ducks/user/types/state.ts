import { LoadingState } from '../../../../types/index'

export interface User {
    _id: string
    name: string
    email: string
    password: string
    avatar?: string
    token?: string
    createdAt?: string
    updateAt?: string
}

export interface UserState {
    data: User | null
    isLoading: LoadingState
}
