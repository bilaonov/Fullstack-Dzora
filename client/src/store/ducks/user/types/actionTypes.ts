import { Action } from 'redux'
import { LoadingState } from '../../../types'
import { User } from './state'

export enum UserActionType {
    REGISTR_SUCCESS = 'user/REGISTR_SUCCESS',
    REGISTR_FAIL = 'user/REGISTR_FAIL',
    SET_USER = 'user/SET_USER',
    USER_LOADING_STATE = 'user/USER_LOADING_STATE',
    AUTH_ERROR = 'user/AUTH_ERROR',
    LOGIN_SOCCESS = 'user/LOGIN_SOCCESS',
    LOGIN_FAIL = 'user/LOGIN_FAIL',
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

export interface FailRegistrActionInterface extends Action<UserActionType> {
    type: UserActionType.REGISTR_FAIL
}

export interface SetUserActionInterface extends Action<UserActionType> {
    type: UserActionType.SET_USER
    payload: User | null
}

export interface ErrorAuthActionInterface extends Action<UserActionType> {
    type: UserActionType.AUTH_ERROR
}

export interface LoginSuccessActionInterface extends Action<UserActionType> {
    type: UserActionType.LOGIN_SOCCESS
    payload: LoginData
}

export interface LoginFailActionInterface extends Action<UserActionType> {
    type: UserActionType.LOGIN_FAIL
}

export interface LogoutActionInterface extends Action<UserActionType> {
    type: UserActionType.LOGOUT
}

export interface UserLoadingStatusActionInterface
    extends Action<UserActionType> {
    type: UserActionType.USER_LOADING_STATE
    payload: LoadingState
}
