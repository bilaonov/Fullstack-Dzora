import { LoadingState } from '../../../types'
import { WordsActions } from './actionCreators'
import { WordsActionsType } from './types/actionTypes'
import { WordsState } from './types/state'

const initialState: WordsState = {
    data: [],
    results: null,
    total: 0,
    current_page: 0,
    last_page: 0,
    isLoading: LoadingState.NEVER,
}

const wordsReducer = (state = initialState, action: WordsActions) => {
    switch (action.type) {
        case WordsActionsType.FETCH_WORDS:
            return {
                data: [],
                isLoading: LoadingState.LOADING,
            }
        case WordsActionsType.SET_WORDS:
            return {
                ...state,
                ...action.payload,
                isLoading: LoadingState.SUCCESS,
            }
        case WordsActionsType.SET_WORD:
            return {
                ...state,
                data: [],
                results: action.payload,
            }
        case WordsActionsType.SET_LOADING_STATE:
            return {
                isLoading: action.payload,
            }
        case WordsActionsType.DELETE_WORDS:
            return {
                ...state,
                isLoading: LoadingState.SUCCESS,
            }
        default:
            return state
    }
}

export default wordsReducer
