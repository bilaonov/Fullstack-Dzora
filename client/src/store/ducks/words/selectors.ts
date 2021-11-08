import { RootState } from '../../store'
import { WordsState } from './types/state'
import { createSelector } from 'reselect'

export const selectWords = (state: RootState): WordsState => state.words



export const selectWordsItems = createSelector(
    selectWords,
    (words) => words.items
)

export const searchWordsItems = createSelector(
    selectWords,
    (words) => words.searchWords
)
