import { LoadingState } from '../../../types'
import {
    LoginSuccessActionInterface,
    LogoutActionInterface,
    SetRegistrActionInterface,
    SetUserActionInterface,
    UserActionsType,
    AuthLoadingStatusActionInterface,
    SetAuthActionInterface,
    
} from './types/actionTypes'
import { LoginData, RegistrData, User } from './types/state'

export const login = (payload: LoginData): LoginSuccessActionInterface => ({
    type: UserActionsType.LOGIN_SOCCESS,
    payload,
})

export const setUser = (payload: User | null): SetUserActionInterface => ({
    type: UserActionsType.SET_USER,
    payload,
})

export const setAuth = (): SetAuthActionInterface => ({
    type: UserActionsType.SET_AUTH,
})

export const setRegistr = (payload: RegistrData): SetRegistrActionInterface => ({
    type: UserActionsType.REGISTR_SUCCESS,
    payload,
})

export const logout = (): LogoutActionInterface => ({
    type: UserActionsType.LOGOUT,
})

export const setUserLoadingStatus = (payload: LoadingState): AuthLoadingStatusActionInterface => ({
    type: UserActionsType.AUTH_LOADING_STATUS,
    payload,
})

export type UserActions =
    | SetAuthActionInterface
    | LoginSuccessActionInterface
    | SetUserActionInterface
    | SetRegistrActionInterface
    | LogoutActionInterface
    | AuthLoadingStatusActionInterface
