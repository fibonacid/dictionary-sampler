import {types} from '../actions/actionTypes'
import { takeLatest, select, put } from 'redux-saga/effects';
import { maxApi } from "../lib/config/maxApi";
import {maxConsolePrintAction} from "../actions/maxConsolePrintAction";

export function* logStoreWatcher() {
    yield takeLatest(types.LOG_STORE, logStoreSaga);
}

const stateSelector = state => state;

export function* logStoreSaga(action) {
    const state = yield select(stateSelector);
    yield maxApi.setDict("store", state);
    //const pretty = JSON.stringify(state, null, 4);
    //yield put(maxConsolePrintAction(`\n${pretty}\n`))
}