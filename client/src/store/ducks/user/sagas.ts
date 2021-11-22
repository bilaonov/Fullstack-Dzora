import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from '../../../api/authApi'
import { LoadingState } from '../../types'
import { logout, setUser, setUserLoadingStatus } from './actionCreators'
import {
    LoginSuccessActionInterface,
    SetRegistrActionInterface,
    UserActionType,
} from './types/actionTypes'

export function* loginRequest({ payload }: LoginSuccessActionInterface) {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        //@ts-ignore
        const data = yield call(AuthApi.login, payload)
        window.localStorage.setItem('token', data.token)
        yield put(setUser(data))
        yield put(setUserLoadingStatus(LoadingState.SUCCESS))
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

export function* userSaga() {
    yield takeLatest(UserActionType.LOGIN_SOCCESS, loginRequest)
    yield takeLatest(UserActionType.REGISTR_SUCCESS, registrRequest)
}
