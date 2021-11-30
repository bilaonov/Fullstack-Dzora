import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from '../../../api/authApi'
import { LoadingState } from '../../types'
import { logout, setAuth, setUser, setUserLoadingStatus } from './actionCreators'
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

export function* setAuthRequest() {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        const token = localStorage.getItem('token')
        //@ts-ignore
        const { data } = yield axios.get('auth/login/withToken', { headers: { Token: token } })
        yield put(
            setUser(data),
        )

        yield put(setUserLoadingStatus(LoadingState.SUCCESS))
    } catch (e) {}
}

export function* userSaga() {
    yield takeLatest(UserActionType.LOGIN_SOCCESS, loginRequest)
    yield takeLatest(UserActionType.REGISTR_SUCCESS, registrRequest)
    yield takeLatest(UserActionType.SET_AUTH, setAuthRequest)
}
