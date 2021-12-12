import { Action } from 'redux'
import { LoadingState } from '../../../../types'
import { User } from './state'

export enum UserActionType {
    REGISTR_SUCCESS = 'user/REGISTR_SUCCESS',
    SET_USER = 'user/SET_USER',
    AUTH_LOADING_STATUS = 'user/USER_LOADING_STATE',
    LOGIN_SOCCESS = 'user/LOGIN_SOCCESS',
    SET_AUTH = 'user/SET_AUTH',
    LOGOUT = 'user/LOGOUT',
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

export interface SetRegistrActionInterface extends Action<UserActionType> {
    type: UserActionType.REGISTR_SUCCESS
    payload: RegistrData
}

export interface SetUserActionInterface extends Action<UserActionType> {
    type: UserActionType.SET_USER
    payload: User | null
}

export interface SetAuthActionInterface extends Action<UserActionType> {
    type: UserActionType.SET_AUTH
}

export interface LoginSuccessActionInterface extends Action<UserActionType> {
    type: UserActionType.LOGIN_SOCCESS
    payload: LoginData
}

export interface LogoutActionInterface extends Action<UserActionType> {
    type: UserActionType.LOGOUT
}

export interface AuthLoadingStatusActionInterface extends Action<UserActionType> {
    type: UserActionType.AUTH_LOADING_STATUS
    payload: LoadingState
}
