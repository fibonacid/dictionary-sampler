import {types} from '../actions/actionTypes'
import { takeLatest, select, call, put, all } from 'redux-saga/effects'
import { maxApi } from "../lib/config/maxApi"

export function* maxObjectOutputWatcher() {
    const saga = yield takeLatest(types.MAX_OBJECT_OUTPUT, maxObjectOutputSaga);
}

export function* maxObjectOutputSaga(action) {
    yield maxApi.outlet(action.payload);
}