import {call, put, takeLatest} from 'redux-saga/effects'
import { wordsApi } from '../../../api/wordsApi'
import { addWords, setWords } from './actionCreators'
import { AddWordsActionInterface, WordsActionsType } from './types/actionTypes'
import { LoadingState } from './types/state'


export function* fetchWordsRequest():any {
    try {
        
        const items = yield call(wordsApi.fetchWords)
        yield put(setWords(items))
        
    }catch(e) {
        yield put(setWordsLoadingState(LoadingState.ERROR))
    }
}

export function* addWordsRequest({payload}: AddWordsActionInterface ):any {
    try {
        
        const item = yield call(wordsApi.addWords, payload)
        
        yield put(addWords(item))
        
    }catch(e) {
        console.log(e)
    }
}

export function* wordsSaga() {
    yield takeLatest(WordsActionsType.FETCH_WORDS, fetchWordsRequest)
    yield takeLatest(WordsActionsType.ADD_WORDS, addWordsRequest)
}


function setWordsLoadingState(ERROR: LoadingState): any {
    throw new Error('Function not implemented.')
}

