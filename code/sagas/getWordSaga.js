import {types} from '../actions/actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from "axios";
import {initAxios} from "../helpers/initAxios";

initAxios(axios);

export function* getWordWatcher() {
   const saga = yield takeLatest(types.GET_WORD, getWordSaga)
}

export function* getWordSaga(action) {
   const payload = yield call(getWordRequest, action.payload);
   if (typeof payload !== "undefined") {
      yield put({type: types.GET_WORD_SUCCESS, payload: digestResponse(payload)})
   } else {
      yield put({type: types.GET_WORD_ERROR, error: "error"})
   }
}

export function getWordRequest(word) {
   // Initialize request headers
   return axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}`)
}

function digestResponse({data}) {
   if (data) {
      return data
   }
}
