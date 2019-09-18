import {types} from '../actions/actionTypes'
import { call, select, put , fork, take, actionChannel} from 'redux-saga/effects'
import {addWordAction} from "../actions/addWordAction";
import {maxObjectOutputAction} from "../actions/maxObjectOutputAction";
import {selectWord} from "../lib/helpers/common";

export function* searchWordWatcher() {
    // 1- Create a channel for request actions
    const requestChan = yield actionChannel(types.SEARCH_WORD);
    while (true) {
        // 2- take from the channel
        const action = yield take(requestChan);
        // 3- Note that we're using a blocking call
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
            yield put(maxObjectOutputAction(word));
        } else {
            yield put({
                type: types.SEARCH_WORD_NOT_FOUND,
                payload: action.payload
            });
            yield put(addWordAction(action.payload))
        }
     }
    catch(error) {
        yield put({
            type: types.SEARCH_WORD_ERROR,
            error: error.message
        })
    }
}