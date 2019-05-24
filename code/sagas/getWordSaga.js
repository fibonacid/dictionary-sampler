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
   if (payload.status == 200) {
      yield put({type: types.GET_WORD_SUCCESS, payload: digestResponse(payload)})
   } else {
      yield put({type: types.GET_WORD_ERROR })
   }
}

export function getWordRequest({word, params}) {
   let { lang, filters } = params;
   let url = `https://od-api.oxforddictionaries.com/api/v2/entries/${lang}/${word}`;
   url += getFilterParams(filters);
   console.log(url)
   return axios.get(url)
      .catch((error)=>(error))
}


function digestResponse({data}) {
   return data.results;
}

function getFilterParams(filters) {
   let params = "";
   if (filters) {
      params+="?fields=";
      filters.forEach((f) => {
         if (typeof f === "string") {
            params += f
            if (f !== [...filters].pop()) {
               params += "&&"
            }
         }
      })
   }
   return params;
}
