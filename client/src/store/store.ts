import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./rootReducers";
import rootSaga from "./saga";
import { WordsState } from "./structure/words/types/state";
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    words: WordsState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)))

sagaMiddleware.run(rootSaga)