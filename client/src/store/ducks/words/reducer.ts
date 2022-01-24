import { LoadingState } from '../../../types'
import { WordsActions } from './actionCreators'
import { WordsActionsType } from './types/actionTypes'
import { WordsState } from './types/state'

const initialState: WordsState = {
    data: [],
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
                data: action.payload,
                isLoading: LoadingState.SUCCESS
            }
        case WordsActionsType.DELETE_WORDS:
            return {
                ...state
            }
        default:
            return state
    }
}

export default wordsReducer

// export const wordsReducer = produce((draft: Draft<WordsState>, action: WordsActions) => {
//     switch (action.type) {
//         case WordsActionsType.SET_WORDS:

//             draft.data = action.payload
//             draft.loadingState = LoadingState.SUCCESS
//             break
//         case WordsActionsType.SET_WORD:
//             draft.searchWords = action.payload
//             draft.loadingState = LoadingState.SUCCESS
//             break
//         case WordsActionsType.FETCH_WORDS:
//             draft.data = []
//             draft.loadingState = LoadingState.SUCCESS
//             break
//         case WordsActionsType.SET_LOADING_STATE:
//             draft.loadingState = action.payload
//             break
//         case WordsActionsType.ADD_WORDS:
//             draft.loadingState = LoadingState.SUCCESS
//             break
//         default:
//             break
//     }
// }, initialWordsState)
