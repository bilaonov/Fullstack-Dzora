import { Action } from 'redux'
import { LoadingState } from '../../../../types'
import { WordsState } from './state'

export enum WordsActionsType {
    SET_WORDS = 'words/SET_WORDS',
    SET_LOADING_STATE = 'words/SET_LOADING_STATE',
    FETCH_WORDS = 'words/FETCH_WORDS',
    ADD_WORDS = 'words/ADD_WORDS',
    SET_WORD = 'words/SET_WORD',
    SEARCH_WORDS = 'words/SEARCH_WORDS',
    DELETE_WORDS = 'words/DELETE_WORDS',
    SET_RECORDING = 'words/SET_RECORDING',
    START_RECORDING = 'words/START_RECORDING',
    STOP_RECORDING = 'words/STOP_RECORDING',
    DELETE_RECORDING = 'words/DELETE_RECORDING',
    VERIFY_WORDS = 'words/VERIFY_WORDS',
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
    page: number
}

export interface AddWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.ADD_WORDS
    payload: {
        word: string
        translate: string
    }
}

export interface VerifyWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.VERIFY_WORDS
    id: string
    payload: {
        verify: boolean
    }
}

export interface SearchWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.SEARCH_WORDS
    searchString: string | null
    lang: string
}

export interface DeleteWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.DELETE_WORDS
    id: string
}

export interface SetRecordingActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.SET_RECORDING
}

export interface StopRecordingActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.STOP_RECORDING
}

export interface StartRecordingActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.START_RECORDING
}

export interface DeleteRecordingActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.DELETE_RECORDING
}

export interface SetWordsLoadingStatusActionInteface extends Action<WordsActionsType> {
    type: WordsActionsType.SET_LOADING_STATE
    payload: LoadingState
}

