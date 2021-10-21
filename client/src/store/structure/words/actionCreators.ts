import { 
    SetWordsActionInterface, 
    WordsActionsType,
    FetchWordsActionInteface,
    SetWordsLoadingStateActionInteface,
    AddWordsActionInterface
} from "./types/actionTypes";

import { IWords, LoadingState, WordsState } from "./types/state";

export const setWords = (payload: WordsState['items']): SetWordsActionInterface => ({
    type: WordsActionsType.SET_WORDS,
    payload
})

export const addWords = (payload: {
    rus_word: string, 
    dig_word: string
}): AddWordsActionInterface => ({
    type: WordsActionsType.ADD_WORDS,
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
    | AddWordsActionInterface
    | FetchWordsActionInteface
    | SetWordsLoadingStateActionInteface
    | SetWordsActionInterface
