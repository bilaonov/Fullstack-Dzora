import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from '../../../api/authApi'
import { LoadingState } from '../../../types'
import { setUser, setUserLoadingStatus } from './actionCreators'
import {
    LoginSuccessActionInterface,
    SetRegistrActionInterface,
    UserActionsType,
} from './types/actionTypes'
import { NotificationManager } from 'react-notifications'

export function* loginRequest({ payload }: LoginSuccessActionInterface): any {
    try {
        const data = yield call(AuthApi.login, payload)
        yield put(setUser(data))
        yield localStorage.setItem('token', data.token)
        NotificationManager.success('Вы успешно авторизовались', '', 2000)
    } catch (error: any) {
        if (error.response.status === 404) {
            NotificationManager.error(error.response.data.message, '', 2000)
        }
        if (error.response.status === 400) {
            NotificationManager.error(error.response.data.message, '', 2000)
        }
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* registrRequest({ payload }: SetRegistrActionInterface) {
    try {
        yield call(AuthApi.register, payload)
        NotificationManager.success('Вы успешно зарегистрировались', '', 2000)
    } catch (error: any) {
        if (error.response.status === 404) {
            NotificationManager.error(error.response.data.message, '', 2000)
        }
        if (error.response.status === 400) {
            NotificationManager.error(error.response.data.message, '', 2000)
        }
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* setAuthRequest(): any {
    try {
        const data = yield call(AuthApi.getMe)
        yield put(setUser(data))
    } catch (e) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.LOGIN_SOCCESS, loginRequest)
    yield takeLatest(UserActionsType.REGISTR_SUCCESS, registrRequest)
    yield takeLatest(UserActionsType.SET_AUTH, setAuthRequest)
}
