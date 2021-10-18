import {call, put, takeLatest} from 'redux-saga/effects'
import { wordsApi } from '../../../api/wordsApi'
import { setWords } from './actionCreators'
import { WordsActionsType } from './types/actionTypes'


export function* fetchWordsRequest():any {
    try {
        const items = yield call(wordsApi.fetchWords)

        yield put(setWords(items))
    }catch(e) {
        console.log(e)
    }
}

export function* wordsSaga() {
    yield takeLatest(WordsActionsType.FETCH_WORDS, fetchWordsRequest)
}