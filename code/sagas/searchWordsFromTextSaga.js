import {takeEvery, put, all} from "@redux-saga/core/effects";
import {types} from "../actions/actionTypes";
import {searchWordAction} from "../actions/searchWordAction";

export function* searchWordsFromTextWatcher() {
    yield takeEvery(types.SEARCH_WORDS_FROM_TEXT, searchWordsFromTextSaga);
}

export function* searchWordsFromTextSaga(action) {
    const text = action.payload;
    // Filter non-alphanumeric characters
    text.replace(/[^\w\s]|_/g, "");
    // Divide in words
    const words = text.split(" ");
    // Loop through each word
    /*for (let i = 0; i < words.length; i++) {
        yield put(searchWordAction(words[i]))
    }*/
    yield all(words.map(word => put(searchWordAction(word))))
}

