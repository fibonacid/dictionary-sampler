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
    maxPolyTildeMessage,
    maxSendRefresh,
} from "../lib/config/maxApi";
import {fetchWordAction} from "../actions/fetchWordAction";

const searchSelector = (state, searchId) => state.queue[searchId];
const wordSelector = (state, wordId) => {
    const { words } = state;
    return words.data[wordId];
};
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
    let storedWord = yield select(wordSelector, query);
    // If word is not present in the store
    if (!storedWord) {
        // Fetch word from API
        yield put(fetchWordAction(query));
    }
    // If word has already been fetched
    else {
        // If word has an "audioFile" property
        if (_.has(storedWord, "audioFile")) {
            // Send audioFile to max poly~ object
            yield call(maxPolyTildeMessage,
                `${storedSearch.status} ${storedWord.audioFile}`
            );
        }
    }
};

