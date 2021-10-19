import { RootState } from "../../store";
import { IWords, WordsState } from "./types/state";
import { createSelector } from 'reselect'

export const selectWords = (state: RootState): WordsState => state.words

export const selectWordsItems = createSelector(selectWords, (words) => words.items)
