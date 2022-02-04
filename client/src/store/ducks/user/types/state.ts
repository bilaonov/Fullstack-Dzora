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
    isAuth: boolean
    isLoading: LoadingState
}

export interface LoginData {
    email: string
    password: string
}

export interface RegistrData {
    name: string
    email: string
    password: string
    password2: string
}
