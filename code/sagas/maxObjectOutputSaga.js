import {types} from '../actions/actionTypes'
import { takeLatest, select, call, put, all } from 'redux-saga/effects'
import { maxApi } from "../lib/config/maxApi"

export function* maxObjectOutputWatcher() {
    yield takeLatest(types.MAX_OBJECT_OUTPUT, maxObjectOutputSaga);
}

export function* maxObjectOutputSaga(action) {
    maxApi.outlet(action.payload);
}