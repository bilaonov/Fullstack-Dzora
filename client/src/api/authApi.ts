import {axios} from '../core/axios'
import { LoginData, RegistrData } from '../store/ducks/user/types/actionTypes'

interface ResponseApi {
    status: string
    data: any
}

const url = 'http://localhost:5000/api'

export const AuthApi = {
    async login(formData: LoginData): Promise<ResponseApi> {
        const { data } = await axios.post<ResponseApi>(url + '/auth/login', {
            email: formData.email, 
            password: formData.password
        })
        return data
    },
    async register(formData: RegistrData): Promise<ResponseApi> {
        const { data } = await axios.post<ResponseApi>(url + '/auth/registration/', formData)
        return data
    }
}


//@ts-ignore
window.AuthApi = AuthApi

