import {takeEvery, put, select} from 'redux-saga/effects'
import {types} from "../actions/actionTypes";
import {addSearchToQueueAction} from "../actions/addSearchToQueueAction";

const queueSelector = state => state.queue;

export function* searchWordWatcher() {
    yield takeEvery(types.SEARCH_WORD, searchWordSaga);
}

export function* searchWordSaga(action) {
    // Remove non alphanumeric values from query
    const query = action.payload.replace(/\W/g, '');

    ///////////////////////////////
    // Add query to search queue:
    ///////////////////////////////

    // 1. Generate an ID
    const queue = yield select(queueSelector);
    const queueCount = Object.keys(queue).length;
    const searchId = `${queueCount}-${query.toLowerCase()}`;

    // 2. Dispatch action
    yield put(addSearchToQueueAction(searchId, query));
}

