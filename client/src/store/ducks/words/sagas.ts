import { call, put, takeLatest } from 'redux-saga/effects'
import { wordsApi } from '../../../api/wordsApi'
import { LoadingState } from '../../../types'
import { NotificationManager } from 'react-notifications'
import { setWord, setWords, setWordsLoadingStatus } from './actionCreators'
import {
    AddWordsActionInterface,
    DeleteWordsActionInterface,
    FetchWordsActionInteface,
    SearchWordsActionInterface,
    VerifyWordsActionInterface,
    WordsActionsType,
} from './types/actionTypes'

export function* fetchWordsRequest({ page }: FetchWordsActionInteface): any {
    try {
        const items = yield call(wordsApi.fetchWords, page)
        yield put(setWords(items))
    } catch (e) {
        yield put(setWordsLoadingStatus(LoadingState.ERROR))
    }
}

export function* addWordsRequest({ payload }: AddWordsActionInterface): any {
    try {
        yield call(wordsApi.addWords, payload)
        NotificationManager.success('Слова успешно добавлены на рассмотрение, спасибо!', '', 4000)
    } catch (error: any) {
        if (error.response.status === 400) {
            NotificationManager.info(error.response.data.message, '', 4000)
        }
        yield put(setWordsLoadingStatus(LoadingState.ERROR))
        NotificationManager.error('Ошибка сервера', '', 4000)
    }
}

export function* deleteWordsRequest({ id }: DeleteWordsActionInterface): any {
    try {
        yield call(wordsApi.deleteWord, id)
        NotificationManager.success('Слова успешно удалены', '', 4000)
    } catch (e: any) {
        NotificationManager.info(e.response.data.message, '', 4000)
        yield put(setWordsLoadingStatus(LoadingState.ERROR))
    }
}

export function* verifyWordsRequest({ id, payload }: VerifyWordsActionInterface): any {
    try {
        yield call(wordsApi.verifyWords, id, payload)
        NotificationManager.success('Слова успешно добавлены', '', 4000)
    } catch (e) {
        yield put(setWordsLoadingStatus(LoadingState.ERROR))
    }
}

export function* searchWordsRequest({ searchString, lang }: SearchWordsActionInterface): any {
    try {
        const items = yield call(wordsApi.searchWords, searchString, lang)
        yield put(setWord(items))
    } catch (e) {
        yield put(setWordsLoadingStatus(LoadingState.ERROR))
    }
}

export function* wordsSaga() {
    yield takeLatest(WordsActionsType.FETCH_WORDS, fetchWordsRequest)
    yield takeLatest(WordsActionsType.VERIFY_WORDS, verifyWordsRequest)
    yield takeLatest(WordsActionsType.ADD_WORDS, addWordsRequest)
    yield takeLatest(WordsActionsType.DELETE_WORDS, deleteWordsRequest)
    yield takeLatest(WordsActionsType.SEARCH_WORDS, searchWordsRequest)
}
