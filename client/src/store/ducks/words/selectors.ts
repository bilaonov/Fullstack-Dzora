import { RootState } from '../../store'
import { WordsState } from './types/state'
import { createSelector } from 'reselect'

export const selectWords = (state: RootState): WordsState => state.words
export const totalWords = createSelector(selectWords, (words) => words.total)
export const lastPageWords = createSelector(selectWords, (words) => words.last_page)
export const currentPageWords = createSelector(selectWords, (words) => words.current_page)
export const searchWordsItems = createSelector(selectWords, (words) => words.results)
export const wordsLoadingStatus = createSelector(selectWords, (words) => words.isLoading)

export const selectWordsVerify = createSelector(selectWords, (words) =>
    words.data.filter((item: any) => item.verify),
)

export const selectWordsNoVerify = createSelector(selectWords, (words) =>
    words.data.filter((item: any) => !item.verify),
)
