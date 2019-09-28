import {all, takeEvery, select, put, call} from "redux-saga/effects";
import {types} from "../actions/actionTypes";
import {QUEUE_STATUS} from "../lib/config/constants";
import {updateQueuedSearchAction} from "../actions/updateQueuedSearchAction";
import {maxPolyTildeMessage, maxSendRefresh} from "../lib/config/maxApi";
import {removeSearchFromQueueAction} from "../actions/removeSearchFromQueueAction";

const searchSelector = (state, searchId) => state.queue[searchId];

export function* searchWordResolveWatcher(action) {
    yield all([
        takeEvery(types.SEARCH_WORD_SUCCESS, searchWordSuccessSaga),
        takeEvery(types.SEARCH_WORD_ERROR, searchWordErrorSaga),
        takeEvery(types.SEARCH_WORD_TIMEOUT, searchWordTimeoutSaga),
    ]);
}

export function* searchWordSuccessSaga(action) {
    const { searchId, result } = action.payload;
    const search = yield select(searchSelector, searchId);
    yield put(updateQueuedSearchAction(searchId,
        QUEUE_STATUS.AVAILABLE, result
    ));
    // Output result to max poly~ object
    yield call(
        maxPolyTildeMessage,
        search.polyTarget+1, // add 1 to avoid "target 0"
        `${QUEUE_STATUS.AVAILABLE} ${result}`
    );
    // Remove search from queue
    yield put(removeSearchFromQueueAction(searchId));
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
        search.polyTarget+1, // add 1 to avoid "target 0"
        QUEUE_STATUS.FAILED
    );
    // Remove search from queue
    yield put(removeSearchFromQueueAction(searchId));
}

export function* searchWordTimeoutSaga(action) {
    const { searchId, message } = action.payload;
    const search = yield select(searchSelector, searchId);
    yield put(updateQueuedSearchAction(searchId,
        QUEUE_STATUS.TIMEOUT
    ));
    yield call(
        maxPolyTildeMessage,
        search.polyTarget+1, // add 1 to avoid "target 0"
        QUEUE_STATUS.TIMEOUT
    );
    // Remove search from queue
    yield put(removeSearchFromQueueAction(searchId));
}