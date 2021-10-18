export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface IWords {
    _id: string
    dig_word: string,
    rus_word: string
}

export interface WordsState {
    items: IWords[]
    loadingState: LoadingState
    singleWord: IWords | null
}