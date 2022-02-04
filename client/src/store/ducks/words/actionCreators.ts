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
    UpdateWordsActionInterface,
} from './types/actionTypes'

import { WordsData, WordsState } from './types/state'

export const setWords = (payload: WordsState['data']): SetWordsActionInterface => ({
    type: WordsActionsType.SET_WORDS,
    payload,
})

export const setWord = (payload: WordsState['data']): SetWordActionInterface => ({
    type: WordsActionsType.SET_WORD,
    payload,
})

export const addWords = (payload: WordsData): AddWordsActionInterface => ({
    type: WordsActionsType.ADD_WORDS,
    payload,
})

export const fetchWords = (page: number | undefined): FetchWordsActionInteface => ({
    type: WordsActionsType.FETCH_WORDS,
    page,
})

export const setWordsLoadingStatus = (
    payload: LoadingState,
): SetWordsLoadingStatusActionInteface => ({
    type: WordsActionsType.SET_LOADING_STATE,
    payload,
})

export const deleteWords = (id: string, page: number): DeleteWordsActionInterface => ({
    type: WordsActionsType.DELETE_WORDS,
    id,
    page,
})

export const searchWords = (
    searchString: string | null,
    lang: string,
): SearchWordsActionInterface => ({
    type: WordsActionsType.SEARCH_WORDS,
    searchString,
    lang,
})

export const updateWords = (
    id: string | undefined,
    page: number | undefined,
    payload: WordsData,
): UpdateWordsActionInterface => ({
    type: WordsActionsType.UPDATE_WORDS,
    id,
    page,
    payload,
})

export const verifyWords = (
    id: string,
    page: number,
    payload: { verify: boolean },
): VerifyWordsActionInterface => ({
    type: WordsActionsType.VERIFY_WORDS,
    id,
    page,
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
