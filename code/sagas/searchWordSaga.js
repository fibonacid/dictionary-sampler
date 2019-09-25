import {types} from "../actions/actionTypes";
import {addSearchToQueueAction} from "../actions/addSearchToQueueAction";
import {cleanID} from "../lib/helpers/common";
import {increaseSearchCountAction} from "../actions/increaseSearchCountAction";
import {
    actionChannel,
    put,
    select,
    take,
    delay,
    call
} from 'redux-saga/effects'
import {
    maxMessageOut,
    maxPolyTildeMessage,
    maxSendRefresh,
} from "../lib/config/maxApi";
import {fetchWordAction} from "../actions/fetchWordAction";

const searchSelector = (state, searchId) => state.queue[searchId];
const wordSelector = (state, wordId) => state.words[wordId];
const searchCountSelector = state => state.base.searchCount;

export function* searchWordWatcher() {
    // 1- Create a channel for request actions
    const channel = yield actionChannel(types.SEARCH_WORD);
    while (true) {
        // 2- take from the channel
        const action = yield take(channel);
        // 3- Wait some millis
        yield delay(2);
        // 4- Note that we're using a blocking call
        yield call(searchWordSaga, action);
    }
}

export function* searchWordSaga(action) {
    // Remove non alphanumeric values from query
    const query = cleanID(action.payload);

/* =========================
 * ADD SEARCH TO QUEUE
 * ========================= */

    // 1. Increase search cont
    yield put(increaseSearchCountAction());

    // 2. Generate an ID
    const searchCount = yield select(searchCountSelector);
    const searchId = `${searchCount}-${query}`;

    // 3. Add search to queue
    yield put(addSearchToQueueAction(searchId, query));
    const storedSearch = yield select(searchSelector, searchId);

    // Refresh Max dictionary
    yield call(maxSendRefresh);

    // Output max poly~ message "queued"
    yield call(maxPolyTildeMessage, searchCount, storedSearch.status);

/* ==============================
 * PROVIDE WORD FOR QUERY
 * ============================== */

    // Try query as key to retrieve a word from the store
    const storedWord = yield select(wordSelector, query);
    // If query matches a word in the store:
    if (storedWord) {
        // If word has an audio file
        if (storedWord.audioFile) {

        }
        // If word doesn't have an audio file
        else {

        }
    }
    // Else, if query doesn't have any word in the store:
    else {
        // Call saga to fetch a word from the Oxford API
        yield put(fetchWordAction(query));
        // Get fetched word from store
        const word = yield select(wordSelector, query);
        //console.log(`word = ${word}`);
    }
};

