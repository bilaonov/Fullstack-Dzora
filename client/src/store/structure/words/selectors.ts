import { RootState } from "../../store";
import { IWords, WordsState } from "./types/state";

export const selectWords = (state: RootState): WordsState => state.words
