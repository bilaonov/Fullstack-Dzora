export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface IWords {
    _id: string
    word: string
    translate: string
    audio?: string
}

export interface WordsState {
    items: IWords[]
    loadingState: LoadingState
    searchWords: IWords[] | null
}
