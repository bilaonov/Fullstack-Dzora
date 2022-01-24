import { call, put, takeLatest } from 'redux-saga/effects'
import { wordsApi } from '../../../api/wordsApi'
import { setWord, setWords } from './actionCreators'
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
    } catch (e) {}
}

export function* addWordsRequest({ payload }: AddWordsActionInterface): any {
    try {
        yield call(wordsApi.addWords, payload)
    } catch (e) {}
}

export function* deleteWordsRequest({ id }: DeleteWordsActionInterface): any {
    try {
        yield call(wordsApi.deleteWord, id)
    } catch (e) {}
}

export function* verifyWordsRequest({ id, payload }: VerifyWordsActionInterface): any {
    try {
        yield call(wordsApi.verifyWords, id, payload)
    } catch (e) {}
}

export function* searchWordsRequest({ searchString }: SearchWordsActionInterface): any {
    try {
        const items = yield call(wordsApi.searchWords, searchString)
        yield put(setWord(items))
    } catch (e) {}
}

export function* wordsSaga() {
    yield takeLatest(WordsActionsType.FETCH_WORDS, fetchWordsRequest)
    yield takeLatest(WordsActionsType.VERIFY_WORDS, verifyWordsRequest)
    yield takeLatest(WordsActionsType.ADD_WORDS, addWordsRequest)
    yield takeLatest(WordsActionsType.DELETE_WORDS, deleteWordsRequest)
    yield takeLatest(WordsActionsType.SEARCH_WORDS, searchWordsRequest)
}

