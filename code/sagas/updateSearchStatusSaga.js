import {takeLatest} from "redux-saga/effects";
import {types} from "../actions/actionTypes";

export function* updateSearchStatusWatcher() {
    yield takeLatest(types.UPDATE_SEARCH_STATUS, updateSearchStatusSaga)
}

export function* updateSearchStatusSaga(action) {
    const { id, status } = action.payload;
    console.log(`[UPDATE] ${JSON.stringify(action.payload)}`);
}