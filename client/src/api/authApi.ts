import { axios } from '../core/axios'
import { LoginData, RegistrData } from '../store/ducks/user/types/actionTypes'
import { User } from '../store/ducks/user/types/state'

interface Response<T> {
    status: string
    data: T
}

export const AuthApi = {
    async login(formData: LoginData): Promise<Response<User>> {
        const { data } = await axios.post<Response<User>>('/api/auth/login/', {
            email: formData.email,
            password: formData.password,
        })
        return data
    },
    async register(formData: RegistrData): Promise<Response<User>> {
        const { data } = await axios.post<Response<User>>('/api/auth/registration/', {
            email: formData.email,
            name: formData.name,
            password: formData.password,
            password2: formData.password2,
        })
        return data
    },

    async setAuth(token: string): Promise<User> {
        const { data } = await axios.get<Response<User>>('/auth/me', {
            headers: {
                token: token,
            },
        })
        return data.data
    },
}

//@ts-ignore
window.AuthApi = AuthApi
