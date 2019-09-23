import {types} from '../actions/actionTypes';
import {takeEvery, put, call} from "redux-saga/effects";
import axios from 'axios';

export function* searchWordsFromWebpageWatcher() {
    yield takeEvery(types.SEARCH_WORDS_FROM_WEBPAGE, searchWordsFromWebpageSaga)
}

export function* searchWordsFromWebpageSaga(action) {
    console.log(`searchWordsFromWebpageSaga: ${JSON.stringify(action)}`);
    try {
        const response = yield call(fetchWebpage, action.payload);
        if (response) {
            yield put({ type: types.SEARCH_WORDS_FROM_WEBPAGE_SUCCESS, payload: response.status});
            const { data } = response;
            console.log(data.body)
        }
    }
    catch(error) {
        yield put({type: types.SEARCH_WORDS_FROM_WEBPAGE_ERROR, error})
    }
}

function fetchWebpage(url) {
    return axios.get(url)
        .then(response => {
            return response
        })
        .catch(error => {
            throw error
        })
}