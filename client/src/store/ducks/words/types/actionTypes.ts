import { Action } from 'redux'
import { IWords, LoadingState, WordsState } from './state'

export enum WordsActionsType {
    SET_WORDS = 'words/SET_WORDS',
    SET_LOADING_STATE = 'words/SET_LOADING_STATE',
    FETCH_WORDS = 'words/FETCH_WORDS',
    ADD_WORDS = 'words/ADD_WORDS',
    SET_WORD = 'words/SET_WORD',
    SEARCH_WORDS = 'words/SEARCH_WORDS',
    DELETE_WORDS = 'DELETE_WORDS',
}

export interface SetWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.SET_WORDS
    payload: WordsState['items']
}

export interface SetWordActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.SET_WORD
    payload: IWords [] | null
}

export interface FetchWordsActionInteface extends Action<WordsActionsType> {
    type: WordsActionsType.FETCH_WORDS
}

export interface AddWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.ADD_WORDS
    payload: {
        rus_word: string
        dig_word: string
    }
}

export interface SearchWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.SEARCH_WORDS
    searchString: string
}

export interface DeleteWordsActionInterface extends Action<WordsActionsType> {
    type: WordsActionsType.DELETE_WORDS
    id: string
}

export interface SetWordsLoadingStateActionInteface
    extends Action<WordsActionsType> {
    type: WordsActionsType.SET_LOADING_STATE
    payload: LoadingState
}
