import { all } from 'redux-saga/effects'
import { userSaga } from './ducks/user/sagas'
import { wordsSaga } from './ducks/words/sagas'

export default function* rootSaga() {
    yield all([wordsSaga(), userSaga()])
}
