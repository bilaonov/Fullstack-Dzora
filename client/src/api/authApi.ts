import {axios} from '../core/axios'
import { LoginData, RegistrData } from '../store/ducks/user/types/actionTypes'

interface ResponseApi {
    status: string
    data: any
}

export const AuthApi = {
    async login(formData: LoginData): Promise<ResponseApi> {
        const { data } = await axios.post<ResponseApi>('/api/auth/login/', {
            email: formData.email, 
            password: formData.password
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
    }
}


//@ts-ignore
window.AuthApi = AuthApi

