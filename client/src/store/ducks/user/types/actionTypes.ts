import { Action } from 'redux'
import { LoadingState } from '../../../../types'
import { LoginData, RegistrData, User } from './state'

export enum UserActionsType {
    REGISTR_SUCCESS = 'user/REGISTR_SUCCESS',
    SET_USER = 'user/SET_USER',
    AUTH_LOADING_STATUS = 'user/USER_LOADING_STATE',
    LOGIN_SOCCESS = 'user/LOGIN_SOCCESS',
    SET_AUTH = 'user/SET_AUTH',
    LOGOUT = 'user/LOGOUT',
    
}



export interface SetRegistrActionInterface extends Action<UserActionsType> {
    type: UserActionsType.REGISTR_SUCCESS
    payload: RegistrData
}


export interface SetUserActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER
    payload: User | null
}

export interface SetAuthActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_AUTH
}

export interface LoginSuccessActionInterface extends Action<UserActionsType> {
    type: UserActionsType.LOGIN_SOCCESS
    payload: LoginData
}

export interface LogoutActionInterface extends Action<UserActionsType> {
    type: UserActionsType.LOGOUT
}

export interface AuthLoadingStatusActionInterface extends Action<UserActionsType> {
    type: UserActionsType.AUTH_LOADING_STATUS
    payload: LoadingState
}
