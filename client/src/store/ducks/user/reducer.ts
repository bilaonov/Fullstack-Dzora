import { LoadingState } from '../../../types'
import { UserActions } from './actionCreators'
import { UserActionsType } from './types/actionTypes'
import { UserState } from './types/state'

const initialUserState: UserState = {
    data: null,
    isAuth: false,
    isLoading: LoadingState.NEVER,
}

const userReducer = (state = initialUserState, action: UserActions) => {
    switch (action.type) {
        case UserActionsType.SET_USER:
            return {
                ...state,
                data: action.payload,
                isAuth: true,
                isLoading: LoadingState.SUCCESS,
            }
        case UserActionsType.SET_AUTH:
            return {
                ...state,
            }
        case UserActionsType.AUTH_LOADING_STATUS:
            return {
                ...state,
                isLoading: action.payload,
            }
        case UserActionsType.LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                data: {},
                isAuth: false,
            }
        default:
            return state
    }
}

export default userReducer
