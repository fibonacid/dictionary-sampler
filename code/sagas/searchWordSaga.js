import {types} from '../actions/actionTypes'
import { call, select, put, take, actionChannel, fork, delay} from 'redux-saga/effects'
import {addWordAction} from "../actions/addWordAction";
import {maxObjectOutputAction} from "../actions/maxObjectOutputAction";
import {selectSearch, selectWord} from "../lib/helpers/common";
import {addSearchAction} from "../actions/addSearchAction";
import {updateSearchStatusAction} from "../actions/updateSearchStatusAction";
import {SEARCH_STATUS} from "../lib/config/constants";

const MINIMUM_WAIT = 50; // ms

export function* searchWordWatcher() {
    // 1- Create a channel for request actions
    const requestChan = yield actionChannel(types.SEARCH_WORD);
    while (true) {
        // 2- take from the channel
        const action = yield take(requestChan);
        // 3- Wait some millis
        yield delay(MINIMUM_WAIT);
        // 4- Note that we're using a blocking call
        yield call(searchWordSaga, action);
    }
}

export function* searchWordSaga(action) {
    try {

        const word = yield select(selectWord, action.payload);
        if (typeof word !== "undefined") {
            yield put({
                type: types.SEARCH_WORD_FOUND,
                payload: word
            });
            if (word.audio_file) {
                yield put(maxObjectOutputAction(word.audio_file));
            }
        } else {
            yield put({
                type: types.SEARCH_WORD_NOT_FOUND,
                payload: action.payload
            });


            console.log("searchWordSaga", JSON.stringify(action.payload));

            yield put(addSearchAction(action.payload));

            const { src_lang } = yield select(state => state.base);
            yield put(addWordAction(action.payload, {
                lang: src_lang
            }));
        }
     }
    catch(error) {
        yield put({
            type: types.SEARCH_WORD_ERROR,
            error: error.message
        });

        const search_id = select(selectSearch, action.payload);
        if (search_id) {
            yield put(updateSearchStatusAction(search_id, SEARCH_STATUS.FAILED))
        }
    }
}