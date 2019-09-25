import {takeEvery, call} from "redux-saga/effects";
import {types} from "../actions/actionTypes";
import {OxfordApi} from "../lib/helpers/OxfordApi";

export function* fetchWordWatcher() {
    yield takeEvery(types.FETCH_WORD, fetchWordSaga)
}

export function* fetchWordSaga(action) {
    const word = action.payload;
    const response = yield call(OxfordApi.searchWord, word);

    console.log(response.status);
}

