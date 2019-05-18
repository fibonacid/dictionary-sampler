import types from '../actions/actionTypes'
import { takeLatest, delay, put, race } from 'redux-saga/effects'
import axios from 'axios'
import {initAxios} from "../helpers/initAxios";

export function* getWordWatcher() {
   const saga = yield takeLatest(types.GET_WORD, getWordSaga)
}

export function* getWordSaga(action) {
   const payload = yield call(getWordRequest, action.payload);
   if (typeof payload == "undefined") {
      yield put({type: types.GET_WORD_SUCCESS, payload})
   } else {
      yield put({type: types.GET_WORD_ERROR, error: "error"})
   }
}

// Initialize request headers
initAxios(axios);

export function getWordRequest(word) {
   return axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}`);
}
