import { all } from 'redux-saga/effects'
import { wordsSaga } from './structure/words/sagas'

export default function* rootSaga() {
    yield all([wordsSaga()])
}
