import {types} from "../actions/actionTypes";
import {select, call, takeEvery} from "@redux-saga/core/effects";
import {maxPolyTildeMessage, maxSendRefresh} from "../lib/config/maxApi";

export function* updateQueuedSearchWatcher() {
    yield takeEvery(types.UPDATE_QUEUED_SEARCH, updateQueuedSearchSaga)
}

const searchSelector = (state, searchId) => state.queue[searchId];

export function* updateQueuedSearchSaga({payload}) {
    const {polyTarget} = yield select(searchSelector, payload.searchId);
    const { status, result } = payload.args;
    let message = status;
    if (result) {
        message = `${message} ${result}`
    }
    // // Output max poly~ message "queued"
    // yield call(maxPolyTildeMessage, polyTarget, message);
    // // Refresh Max dictionary
    // yield call(maxSendRefresh);
}

