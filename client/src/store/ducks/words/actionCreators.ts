import { LoadingState } from '../../../types/index'
import {
    SetWordsActionInterface,
    WordsActionsType,
    FetchWordsActionInteface,
    SetWordsLoadingStatusActionInteface,
    DeleteWordsActionInterface,
    AddWordsActionInterface,
    SearchWordsActionInterface,
    SetWordActionInterface,
    VerifyWordsActionInterface,
} from './types/actionTypes'

import { IWords, WordsState } from './types/state'

export const setWords = (payload: WordsState['data']): SetWordsActionInterface => ({
    type: WordsActionsType.SET_WORDS,
    payload,
})

export const setWord = (payload: WordsState['data']): SetWordActionInterface => ({
    type: WordsActionsType.SET_WORD,
    payload,
})

export const addWords = (payload: {
    word: string
    translate: string
}): AddWordsActionInterface => ({
    type: WordsActionsType.ADD_WORDS,
    payload,
})

export const fetchWords = (page: number): FetchWordsActionInteface => ({
    type: WordsActionsType.FETCH_WORDS,
    page,
})

export const setWordsLoadingStatus = (
    payload: LoadingState,
): SetWordsLoadingStatusActionInteface => ({
    type: WordsActionsType.SET_LOADING_STATE,
    payload,
})

export const deleteWords = (id: string): DeleteWordsActionInterface => ({
    type: WordsActionsType.DELETE_WORDS,
    id,
})

export const searchWords = (searchString: string | null): SearchWordsActionInterface => ({
    type: WordsActionsType.SEARCH_WORDS,
    searchString,
})

export const verifyWords = (
    id: string,
    payload: { verify: boolean },
): VerifyWordsActionInterface => ({
    type: WordsActionsType.VERIFY_WORDS,
    id,
    payload,
})

export type WordsActions =
    | SetWordActionInterface
    | AddWordsActionInterface
    | FetchWordsActionInteface
    | SetWordsLoadingStatusActionInteface
    | SetWordsActionInterface
    | DeleteWordsActionInterface
    | VerifyWordsActionInterface
    | SearchWordsActionInterface
