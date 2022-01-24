import { LoadingState } from '../../../../types/index'

export interface IWords {
    _id: string
    word: string
    translate: string
    audio?: string
    verify: boolean
    createdAt: string
    updateAt: string
}

export interface WordsState {
    data: IWords[]
    total: number
    current_page: number
    last_page: number
    isLoading: LoadingState
}
