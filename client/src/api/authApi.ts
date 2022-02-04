import axios from 'axios'
import { LoginData, RegistrData } from '../store/ducks/user/types/state'

interface ResponseApi {
    token: string
    status: string
    data: any
}

export const AuthApi = {
    async login(formData: LoginData): Promise<ResponseApi> {
        const { data } = await axios.post<ResponseApi>('/api/auth/login/', {
            email: formData.email,
            password: formData.password,
        })
        return data
    },
    async register(formData: RegistrData): Promise<ResponseApi> {
        const { data } = await axios.post<ResponseApi>('/api/auth/registration/', {
            email: formData.email,
            name: formData.name,
            password: formData.password,
            password2: formData.password2,
        })
        return data
    },

    async getMe(): Promise<ResponseApi> {
        const { data } = await axios.get<ResponseApi>('/api/auth/me', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        localStorage.setItem('token', data.token)
        return data
    },
}

//@ts-ignore
window.AuthApi = AuthApi
