import { takeLatest, put } from 'redux-saga/effects'
import {types} from "../actions/actionTypes";
import {maxObjectOutputAction} from "../actions/maxObjectOutputAction";

export function* addSearchWatcher() {
    yield takeLatest(types.ADD_SEARCH, addSearchSaga);
}

export function* addSearchSaga(action) {
    const { id, status } = action.payload;
    yield put(maxObjectOutputAction(`event ${id} ${status}`))

    //console.log(`[ADD] ${JSON.stringify(action.payload)}`);
}