import {types} from '../actions/actionTypes'
import { takeLatest, select, put } from 'redux-saga/effects'
import {maxConsolePrintAction} from "../actions/maxConsolePrintAction";

export function* logStoreWatcher() {
    yield takeLatest(types.LOG_STORE, logStoreSaga);
}

const stateSelector = state => state;

export function* logStoreSaga() {
    const state = yield select(stateSelector);
    const pretty = JSON.stringify(state, null, 4);
    yield put(maxConsolePrintAction(`\n${pretty}\n`))
}