import produce, { Draft } from 'immer'
import { LoadingState } from '../../types'
import { WordsActions } from './actionCreators'
import { WordsActionsType } from './types/actionTypes'
import { WordsState } from './types/state'

const initialWordsState: WordsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    searchWords: null,
}

export const wordsReducer = produce((draft: Draft<WordsState>, action: WordsActions) => {
    switch (action.type) {
        case WordsActionsType.SET_WORDS:
            draft.items = action.payload
            draft.loadingState = LoadingState.SUCCESS
            break
        case WordsActionsType.SET_WORD:
            draft.searchWords = action.payload
            draft.loadingState = LoadingState.SUCCESS
            break
        case WordsActionsType.FETCH_WORDS:
            draft.items = []
            draft.loadingState = LoadingState.SUCCESS
            break
        case WordsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break
        case WordsActionsType.ADD_WORDS:
            draft.loadingState = LoadingState.SUCCESS
            break
        default:
            break
    }
}, initialWordsState)
