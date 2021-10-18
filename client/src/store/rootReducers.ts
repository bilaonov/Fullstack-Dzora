import { combineReducers } from "redux";
import { wordsReducer } from "./structure/words/reducer";

export const rootReducer = combineReducers({
    words: wordsReducer
})