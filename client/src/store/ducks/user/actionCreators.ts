import { LoadingState } from "../../types";
import { ErrorAuthActionInterface, FailRegistrActionInterface, LoginData, LoginFailActionInterface, LoginSuccessActionInterface, LogoutActionInterface, RegistrData, SetRegistrActionInterface, SetUserActionInterface, UserActionType, UserLoadingStatusActionInterface } from "./types/actionTypes";
import { User } from "./types/state";


export const login = (payload: LoginData): LoginSuccessActionInterface => ({
    type: UserActionType.LOGIN_SOCCESS,
    payload
})

export const loginFail = (): LoginFailActionInterface => ({
    type: UserActionType.LOGIN_FAIL
})

export const authError = (): ErrorAuthActionInterface => ({
    type: UserActionType.AUTH_ERROR
})

export const setUser = (payload: User | null): SetUserActionInterface => ({
    type: UserActionType.SET_USER,
    payload

})

export const setRegistr = (payload: RegistrData): SetRegistrActionInterface => ({
    type: UserActionType.REGISTR_SUCCESS,
    payload
}) 

export const failRegistr = (): FailRegistrActionInterface => ({
    type: UserActionType.REGISTR_FAIL
})

export const logout = (): LogoutActionInterface => ({
    type: UserActionType.LOGOUT
})


export const setUserLoadingStatus = (payload: LoadingState): UserLoadingStatusActionInterface => ({
    type: UserActionType.USER_LOADING_STATE,
    payload
})


export type UserActions = 
    | LoginSuccessActionInterface
    | LoginFailActionInterface
    | ErrorAuthActionInterface
    | SetUserActionInterface
    | SetRegistrActionInterface
    | FailRegistrActionInterface
    | LogoutActionInterface
    | UserLoadingStatusActionInterface