import { RootState } from '../../store'
import { WordsState } from './types/state'
import { createSelector } from 'reselect'

export const selectWords = (state: RootState): WordsState => state.words
export const selectWordsItems = createSelector(selectWords, (words) => words.data)
export const totalWords = createSelector(selectWords, (words) => words.total)
export const lastPageWords = createSelector(selectWords, (words) => words.last_page)
export const currentPageWords = createSelector(selectWords, (words) => words.current_page)
export const searchWordsItems = createSelector(selectWords, (words) => words.searchWords)
