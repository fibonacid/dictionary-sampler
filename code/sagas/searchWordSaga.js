import {types} from '../actions/actionTypes'
import { takeLatest, select, call, put, all } from 'redux-saga/effects'
import {addWordAction} from "../actions/addWordAction";
import {maxApiOutputAction} from "../actions/maxApiOutputAction";
import {selectWord} from "../lib/helpers/common";

export function* searchWordWatcher() {
    const saga = yield takeLatest(types.SEARCH_WORD, searchWordSaga);
}

export function* searchWordSaga(action) {
    try {
        const word = yield select(selectWord, action.payload);
        if (typeof word !== "undefined") {
            yield put({
                type: types.SEARCH_WORD_FOUND,
                payload: word
            });
            yield put(maxApiOutputAction(word));
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