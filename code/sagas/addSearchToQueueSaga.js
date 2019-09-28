import {types} from "../actions/actionTypes";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import {maxPolyTildeMessage, maxSendRefresh} from "../lib/config/maxApi";
import {QUEUE_STATUS} from "../lib/config/constants";
import {increaseSearchCountAction} from "../actions/increaseSearchCountAction";

export function* addSearchToQueueWatcher() {
    yield takeEvery(types.ADD_SEARCH_TO_QUEUE, addSearchToQueueSaga)
}

export function* addSearchToQueueSaga(action) {
    const { polyTarget, status } = action.payload.args;
    // Increase search cont
    yield put(increaseSearchCountAction());
    // Output max poly~ message "queued"
    yield call(maxPolyTildeMessage, polyTarget, status);
    // Refresh Max dictionary
    yield call(maxSendRefresh);
}

