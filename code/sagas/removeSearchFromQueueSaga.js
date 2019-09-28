import {takeEvery, put} from "redux-saga/effects";
import {types} from "../actions/actionTypes";
import {decreaseSearchCountAction} from "../actions/decreaseSearchCountAction";

export function* removeSearchFromQueueWatcher() {
    yield takeEvery(types.REMOVE_SEARCH_FROM_QUEUE, removeSearchFromQueueSaga)
}

export function* removeSearchFromQueueSaga(action) {
    const { searchId } = action.payload;
    yield put(decreaseSearchCountAction(searchId));
}