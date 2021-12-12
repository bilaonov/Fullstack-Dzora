import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { rootReducer } from './rootReducers'
import rootSaga from './saga'
import { WordsState } from './ducks/words/types/state'
import { createLogger } from 'redux-logger'
import { UserState } from './ducks/user/types/state'

const logger = createLogger({
    // ...options
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    [x: string]: any
    state: any
    words: WordsState
    user: UserState
}

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
)

sagaMiddleware.run(rootSaga)
