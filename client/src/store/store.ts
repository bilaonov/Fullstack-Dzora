import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./rootReducers";
import rootSaga from "./saga";
import { WordsState } from "./structure/words/types/state";
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
});

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    words: WordsState
}

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)