import { combineReducers } from 'redux'
import { userReducer } from './ducks/user/reducer'
import { wordsReducer } from './ducks/words/reducer'

export const rootReducer = combineReducers({
    words: wordsReducer,
    user: userReducer
})
