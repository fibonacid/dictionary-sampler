import {types} from '../actions/actionTypes'
import { takeLatest, select, call, put, all } from 'redux-saga/effects'
import { maxApi } from "../lib/config/maxApi"

export function* maxConsolePrintWatcher() {
    yield takeLatest(types.MAX_CONSOLE_PRINT, maxConsolePrintSaga);
}

export function* maxConsolePrintSaga(action) {
    maxApi.post(action.payload);
}