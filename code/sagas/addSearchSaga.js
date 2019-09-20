import { takeLatest, put } from 'redux-saga/effects'
import {types} from "../actions/actionTypes";

export function* addSearchWatcher() {
    yield takeLatest(types.ADD_SEARCH, addSearchSaga);
}

export function* addSearchSaga(action) {
    const { id, status } = action.payload;
    console.log(`[ADD] ${JSON.stringify(action.payload)}`);
}