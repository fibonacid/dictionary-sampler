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
   return axios.get(url)
      .catch((error)=>(error))
}


function digestResponse({data}) {
   // If object is composed as expected
   if (data.results &&
       Array.isArray(data.results) &&
       data.results.length > 0
   ) {
      // Retrieve word
      const word = data.results[0];
      const { id, language, lexicalEntries } = word;
      const pronunciations = {};

      // Loop through every lexical entry
      lexicalEntries.forEach( entry => {
         // If theres a registry called pronunciations
         if (entry.pronunciations &&
            Array.isArray(entry.pronunciations)
         ) {
            // Loop through every pronunciation
            entry.pronunciations.forEach( p => {
               // If thers an audio file attached:
               if (p.audioFile) {
                  // Add it to the list
                  pronunciations[`${p.phoneticSpelling}`] = {
                     audioFile: p.audioFile
                  };
               }
            });
         }
      });
      return {
         id,
         language,
         pronunciations
      }
   }
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
