import produce, { Draft } from 'immer'
import { WordsActions } from './actionCreators'
import { WordsActionsType } from './types/actionTypes'
import { LoadingState, WordsState } from './types/state'

const initialWordsState: WordsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    singleWord: null,
}

export const wordsReducer = produce(
    (draft: Draft<WordsState>, action: WordsActions) => {
        switch (action.type) {
            case WordsActionsType.SET_WORDS:
                draft.items = action.payload
                draft.loadingState = LoadingState.LOADED
                break
            case WordsActionsType.FETCH_WORDS:
                draft.items = []
                draft.loadingState = LoadingState.LOADING
                break
            case WordsActionsType.SET_LOADING_STATE:
                draft.loadingState = action.payload
                break
            case WordsActionsType.ADD_WORDS:
                draft.loadingState = LoadingState.LOADED
                break
            default:
                break
        }
    },
    initialWordsState
)
