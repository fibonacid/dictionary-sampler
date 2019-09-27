import {all, takeEvery, select, put, call} from "redux-saga/effects";
import {types} from "../actions/actionTypes";
import {QUEUE_STATUS} from "../lib/config/constants";
import {updateQueuedSearchAction} from "../actions/updateQueuedSearchAction";
import {maxPolyTildeMessage, maxSendRefresh} from "../lib/config/maxApi";

export function* searchWordResolveWatcher() {
    yield all([
        takeEvery(types.SEARCH_WORD_SUCCESS, searchWordSuccessSaga),
        takeEvery(types.SEARCH_WORD_ERROR, searchWordErrorSaga),
        takeEvery(types.SEARCH_WORD_TIMEOUT, searchWordTimeoutSaga),
    ]);
}

const searchSelector = (state, searchId) => state.queue[searchId];

export function* searchWordSuccessSaga(action) {
    const { searchId, result } = action.payload;
    const search = yield select(searchSelector, searchId);
    yield put(updateQueuedSearchAction(searchId,
        QUEUE_STATUS.AVAILABLE, result
    ));
    // Output result to max poly~ object
    yield call(
        maxPolyTildeMessage,
        search.polyTarget,
        `${QUEUE_STATUS.AVAILABLE} ${result}`
    );
    // Refresh Max dictionary
    yield call(maxSendRefresh);
}

export function* searchWordErrorSaga(action) {
    const { searchId, error } = action.payload;
    const search = yield select(searchSelector, searchId);
    yield put(updateQueuedSearchAction(searchId,
        QUEUE_STATUS.FAILED
    ));
    // Output message to max poly~ object
    yield call(
        maxPolyTildeMessage,
        search.polyTarget,
        QUEUE_STATUS.FAILED
    );
    // Refresh Max dictionary
    yield call(maxSendRefresh);
}

export function* searchWordTimeoutSaga(action) {
    const { searchId, message } = action.payload;
    const search = yield select(searchSelector, searchId);
    yield put(updateQueuedSearchAction(searchId,
        QUEUE_STATUS.TIMEOUT
    ));
    yield call(
        maxPolyTildeMessage,
        search.polyTarget,
        QUEUE_STATUS.TIMEOUT
    );
    // Refresh Max dictionary
    yield call(maxSendRefresh);
}