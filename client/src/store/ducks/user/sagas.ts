import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from '../../../api/authApi'
import { LoadingState } from '../../types'
import { setUserLoadingStatus } from './actionCreators'
import {
    LoginSuccessActionInterface,
    LogoutActionInterface,
    SetRegistrActionInterface,
    UserActionType,
} from './types/actionTypes'

export function* loginRequest({ payload }: LoginSuccessActionInterface) {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))

    } catch (e) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* registrRequest({ payload }: SetRegistrActionInterface) {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        yield call(AuthApi.register, payload)
        yield put(setUserLoadingStatus(LoadingState.SUCCESS))
        
    } catch (e) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* logoutRequest() {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        
    } catch (e) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* userSaga() {
    yield takeLatest(UserActionType.LOGIN_SOCCESS, loginRequest)
    yield takeLatest(UserActionType.REGISTR_SUCCESS, registrRequest)
    yield takeLatest(UserActionType.LOGOUT, logoutRequest)
}
