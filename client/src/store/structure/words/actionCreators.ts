import { 
    SetWordsActionInterface, 
    WordsActionsType,
    FetchWordsActionInteface,
    SetWordsLoadingStateActionInteface
} from "./types/actionTypes";

import { LoadingState, WordsState } from "./types/state";

export const setWords = (payload: WordsState['items']): SetWordsActionInterface => ({
    type: WordsActionsType.SET_WORDS,
    payload
})

export const fetchWords = (): FetchWordsActionInteface => ({
    type: WordsActionsType.FETCH_WORDS,
})

export const setWordsLoadingStatw = (payload: LoadingState): SetWordsLoadingStateActionInteface => ({
    type: WordsActionsType.SET_LOADING_STATE,
    payload
})


export type WordsActions = 
    | FetchWordsActionInteface
    | SetWordsLoadingStateActionInteface
    | SetWordsActionInterface

