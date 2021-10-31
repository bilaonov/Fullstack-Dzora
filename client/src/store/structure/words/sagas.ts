import { call, put, takeLatest } from 'redux-saga/effects'
import { wordsApi } from '../../../api/wordsApi'
import { addWords, deleteWords, searchWords, setWord, setWords } from './actionCreators'
import {
    AddWordsActionInterface,
    DeleteWordsActionInterface,
    SearchWordsActionInterface,
    WordsActionsType,
} from './types/actionTypes'
import { LoadingState } from './types/state'

export function* fetchWordsRequest(): any {
    try {
        const items = yield call(wordsApi.fetchWords)
        yield put(setWords(items))
    } catch (e) {
        yield put(setWordsLoadingState(LoadingState.ERROR))
    }
}

export function* addWordsRequest({ payload }: AddWordsActionInterface): any {
    try {
        const item = yield call(wordsApi.addWords, payload)
        yield call(fetchWordsRequest)
        yield put(addWords(item))
    } catch (e) {
        console.log(e)
    }
}

export function* deleteWordsRequest({ id }: DeleteWordsActionInterface): any {
    try {
        yield call(wordsApi.deleteWord, id)
        yield call(fetchWordsRequest)
        yield put(deleteWords(id))
    } catch (e) {}
}

export function* searchWordsRequest({
    searchString,
}: SearchWordsActionInterface): any {
    try {
        const item = yield call(wordsApi.searchWords, searchString)
        yield put(setWord(item))
    } catch (e) {}
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
