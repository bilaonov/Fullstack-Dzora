import { LoadingState } from '../../types'
import {
    SetWordsActionInterface,
    WordsActionsType,
    FetchWordsActionInteface,
    SetWordsLoadingStatusActionInteface,
    DeleteWordsActionInterface,
    AddWordsActionInterface,
    SearchWordsActionInterface,
    SetWordActionInterface,
} from './types/actionTypes'

import { IWords, WordsState } from './types/state'

export const setWords = (payload: WordsState['items']): SetWordsActionInterface => ({
    type: WordsActionsType.SET_WORDS,
    payload,
})

export const setWord = (payload: IWords[] | null): SetWordActionInterface => ({
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

export const fetchWords = (): FetchWordsActionInteface => ({
    type: WordsActionsType.FETCH_WORDS,
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

export type WordsActions =
    | SetWordActionInterface
    | AddWordsActionInterface
    | FetchWordsActionInteface
    | SetWordsLoadingStatusActionInteface
    | SetWordsActionInterface
    | DeleteWordsActionInterface
    | SearchWordsActionInterface
