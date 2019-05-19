import {types} from '../actions/actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import Axios from "axios";

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
   return Axios({
      url: `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}`,
      method: 'GET',
      headers: {
         "app_id": "ec9de178",
         "app_key": "82d2a2435338334b58fc53b4ed458521"
      },
      accept: 'json'
   })
}

function digestResponse({data}) {
   if (data) {
      return data
   }
}
