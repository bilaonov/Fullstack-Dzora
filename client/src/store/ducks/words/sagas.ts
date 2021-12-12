import { call, put, takeLatest } from 'redux-saga/effects'
import { wordsApi } from '../../../api/wordsApi'
import { LoadingState } from '../../../types'
import { addWords, deleteWords, setWord, setWords } from './actionCreators'
import {
    AddWordsActionInterface,
    DeleteWordsActionInterface,
    FetchWordsActionInteface,
    SearchWordsActionInterface,
    WordsActionsType,
} from './types/actionTypes'

export function* fetchWordsRequest({ page }: FetchWordsActionInteface): any {
    try {
        const items = yield call(wordsApi.fetchWords, page)
        yield put(setWords(items))
    } catch (e) {
        yield put(setWordsLoadingState(LoadingState.ERROR))
    }
}

export function* addWordsRequest({ payload }: AddWordsActionInterface): any {
    try {
        const item = yield call(wordsApi.addWords, payload)

        yield put(addWords(item))
    } catch (e) {
        yield put(setWordsLoadingState(LoadingState.ERROR))
    }
}

export function* deleteWordsRequest({ id }: DeleteWordsActionInterface): any {
    try {
        yield call(wordsApi.deleteWord, id)

        yield put(deleteWords(id))
    } catch (e) {
        yield put(setWordsLoadingState(LoadingState.ERROR))
    }
}

export function* searchWordsRequest({ searchString }: SearchWordsActionInterface): any {
    try {
        const item = yield call(wordsApi.searchWords, searchString)
        yield put(setWord(item))
    } catch (e) {
        yield put(setWordsLoadingState(LoadingState.ERROR))
    }
}

export function* wordsSaga() {
    yield takeLatest(WordsActionsType.FETCH_WORDS, fetchWordsRequest)
    yield takeLatest(WordsActionsType.ADD_WORDS, addWordsRequest)
    yield takeLatest(WordsActionsType.DELETE_WORDS, deleteWordsRequest)
    yield takeLatest(WordsActionsType.SEARCH_WORDS, searchWordsRequest)
}

function setWordsLoadingState(ERROR: LoadingState): any {
    throw new Error('Function not implemented.')
}
