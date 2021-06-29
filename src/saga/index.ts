import { all, fork } from 'redux-saga/effects';

import forecast from './forecast';

export default function* rootSaga() {
    yield all([
        fork(forecast)
    ])
}