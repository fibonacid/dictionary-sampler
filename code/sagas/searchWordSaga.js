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
    call,
    race
} from 'redux-saga/effects'
import {fetchWordAction} from "../actions/fetchWordAction";
import {searchWordErrorAction, searchWordSuccessAction, searchWordTimeoutAction} from "../actions/searchWordAction";
import {maxPolyTildeMessage, maxSendRefresh} from "../lib/config/maxApi";
import {QUEUE_STATUS} from "../lib/config/constants";

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
    yield put(addSearchToQueueAction(searchId, query, searchCount));

    // Output max poly~ message "queued"
    yield call(maxPolyTildeMessage, searchCount, QUEUE_STATUS.QUEUED);
    // Refresh Max dictionary
    yield call(maxSendRefresh);

/* ==============================
 *  RESPOND TO QUERY
 * ============================== */

    // Try query as key to retrieve a word from the store
    let storedWord = yield select(wordSelector, query);

    // If word is not present in the store
    if (!storedWord) {

        // Output max poly~ message "queued"
        yield call(maxPolyTildeMessage, searchCount, QUEUE_STATUS.LOADING);
        // Refresh Max dictionary
        yield call(maxSendRefresh);

        // Fetch word from API
        yield put(fetchWordAction(query));

        // Wait for either a success or an error
        const { success, failure, timeout } = yield race({
            success: take(types.DOWNLOAD_WORD_AUDIO_SUCCESS),
            failure: take(types.FETCH_WORD_ERROR),
            timeout: delay(5000)
        });

        // If success won the race
        if (typeof success !== "undefined") {
            // Dispatch search success
            yield put(searchWordSuccessAction(
                searchId,
                success.payload.filename
            ));
        }
        else if (typeof timeout !== "undefined") {
            // Dispatch search timeout
            yield put(searchWordTimeoutAction(
                searchId,
                "Request took too long to complete"
            ));
        }
        else if (typeof failure !== "undefined") {
            yield put(searchWordErrorAction(
                searchId,
                failure.error
            ))
        }
    }
    // If word has already been fetched
    else {

        /* ================================
         *  FETCH WORD FROM THE STORE
         * ================================ */

        // If word has a "localfile" property
        if (_.has(storedWord, "localfile")) {
            // Send audioFile to max poly~ object
            yield put(searchWordSuccessAction(searchId));
            // yield put(updateQueuedSearchAction(searchId,
            //     QUEUE_STATUS.AVAILABLE, storedWord.localfile
            // ));
        }
    }
};


