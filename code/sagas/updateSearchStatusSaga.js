import {put, takeEvery} from "redux-saga/effects";
import {types} from "../actions/actionTypes";
import {maxObjectOutputAction} from "../actions/maxObjectOutputAction";

export function* updateSearchStatusWatcher() {
    yield takeEvery(types.UPDATE_SEARCH_STATUS, updateSearchStatusSaga)
}

export function* updateSearchStatusSaga(action) {
    const { id, status } = action.payload;
    yield put(maxObjectOutputAction(`event ${id} ${status}`))
}