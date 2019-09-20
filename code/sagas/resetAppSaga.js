import {types} from '../actions/actionTypes'
import { takeLatest, select, call, put, all } from 'redux-saga/effects'
import {clearCacheAction} from "../actions/clearCacheAction";
import {clearStoreAction} from "../actions/clearStoreAction";

export function* resetAppWatcher() {
    yield takeLatest(types.RESET_APP, resetAppSaga);
}

export function* resetAppSaga() {
    yield put(clearCacheAction());
    yield put(clearStoreAction());
}