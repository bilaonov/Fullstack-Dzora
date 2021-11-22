import produce, {Draft} from 'immer'
import { LoadingState } from '../../types'
import { UserActions } from './actionCreators'
import { UserActionType } from './types/actionTypes'
import {UserState} from './types/state'

const initialUserState: UserState = {
    data: null,
    status: LoadingState.NEVER
}

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
        case UserActionType.SET_USER:
            draft.data = action.payload
            break
        case UserActionType.AUTH_LOADING_STATUS:
            draft.status = action.payload
            break
        case UserActionType.LOGOUT:
            draft.status = LoadingState.SUCCESS
            draft.data = null
            break
        default: 
                break
    }
}, initialUserState)