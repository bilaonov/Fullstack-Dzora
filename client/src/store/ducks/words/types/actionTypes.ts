import { Action } from 'redux'
import { LoadingState } from '../../../../types'
import { WordsData, WordsState } from './state'

export enum WordsActionsType {
    SET_WORDS = 'words/SET_WORDS',
    SET_LOADING_STATE = 'words/SET_LOADING_STATE',
    FETCH_WORDS = 'words/FETCH_WORDS',
    ADD_WORDS = 'words/ADD_WORDS',
    SET_WORD = 'words/SET_WORD',
    SEARCH_WORDS = 'words/SEARCH_WORDS',
    DELETE_WORDS = 'words/DELETE_WORDS',
    VERIFY_WORDS = 'words/VERIFY_WORDS',
    UPDATE_WORDS = 'words/UPDATE_WORDS',
}

export interface SetWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.SET_WORDS
    payload: WordsState['data']
}

export interface SetWordActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.SET_WORD
    payload: WordsState['data'] | null
}

export interface FetchWordsActionInteface extends Action<WordsActionsType> {
    type: WordsActionsType.FETCH_WORDS
    page: number | undefined
}

export interface AddWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.ADD_WORDS
    payload: WordsData
}

export interface VerifyWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.VERIFY_WORDS
    id: string
    page: number
    payload: {
        verify: boolean
    }
}

export interface UpdateWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.UPDATE_WORDS
    id: string | undefined
    page: number | undefined
    payload: WordsData
}

export interface SearchWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.SEARCH_WORDS
    searchString: string | null
    lang: string
}

export interface DeleteWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.DELETE_WORDS
    id: string
    page: number
}

export interface SetWordsLoadingStatusActionInteface extends Action<WordsActionsType> {
    type: WordsActionsType.SET_LOADING_STATE
    payload: LoadingState
}
