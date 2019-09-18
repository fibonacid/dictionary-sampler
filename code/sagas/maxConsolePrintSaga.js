import {types} from '../actions/actionTypes'
import { takeLatest, select, call, put, all } from 'redux-saga/effects'
import { maxApi } from "../lib/config/maxApi"

export function* maxConsolePrintWatcher() {
    const saga = yield takeLatest(types.MAX_CONSOLE_PRINT, maxConsolePrintSaga);
}

export function* maxConsolePrintSaga(action) {
    yield maxApi.post(action.payload);
}