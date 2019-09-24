import {takeLatest, select} from "redux-saga/effects";
import {types} from "../actions/actionTypes";
import {maxApi} from "../lib/config/maxApi";

export function* logStoreWatcher() {
    yield takeLatest(types.LOG_STORE, logStoreSaga);
}

export function* logStoreSaga(action) {
    const state = yield select(state => state);
    yield maxApi.setDict("store", state);
}