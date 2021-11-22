import { LoadingState } from '../../types'
import {
    LoginData,
    LoginSuccessActionInterface,
    LogoutActionInterface,
    RegistrData,
    SetRegistrActionInterface,
    SetUserActionInterface,
    UserActionType,
    AuthLoadingStatusActionInterface,
} from './types/actionTypes'
import { User } from './types/state'

export const login = (payload: LoginData): LoginSuccessActionInterface => ({
    type: UserActionType.LOGIN_SOCCESS,
    payload,
})

export const setUser = (payload: User | null): SetUserActionInterface => ({
    type: UserActionType.SET_USER,
    payload,
})

export const setRegistr = (
    payload: RegistrData
): SetRegistrActionInterface => ({
    type: UserActionType.REGISTR_SUCCESS,
    payload,
})

export const logout = (): LogoutActionInterface => ({
    type: UserActionType.LOGOUT,
})

export const setUserLoadingStatus = (
    payload: LoadingState
): AuthLoadingStatusActionInterface => ({
    type: UserActionType.AUTH_LOADING_STATUS,
    payload,
})

export type UserActions =
    | LoginSuccessActionInterface
    | SetUserActionInterface
    | SetRegistrActionInterface
    | LogoutActionInterface
    | AuthLoadingStatusActionInterface
