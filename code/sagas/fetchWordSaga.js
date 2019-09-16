import {types} from '../actions/actionTypes'
import {
   takeLatest,
   call,
   put,
   cancel,
   take
} from 'redux-saga/effects'
import axios from "axios";
import {initAxios} from "../lib/helpers/initAxios";
import {cacheWordAudioAction} from "../actions/cacheWordAudioAction";

initAxios(axios);

const lastWordSelector = state => {
   const { words } = state;
   if (words && words.index && words.data) {
      // If index is an array
      if (Array.isArray(words.index)) {
         // Get id of last item in the array
         const id = words.index[words.index.length - 1];
         // If id is a string
         if (typeof id === "string") {
            return words.data[`${id}`];
         }
      }
   }
};

export function* fetchWordWatcher() {
   const saga = yield takeLatest(types.FETCH_WORD, fetchWordSaga);
   // Listen if any there is any failure
   const failure = yield take(types.FETCH_WORD_ERROR);
   // cancel saga if a failure as happened
   yield cancel(saga);
}

export function* fetchWordSaga(action) {
   try {
      const { payload } = yield call(fetchWordRequest, action.payload);
      if (typeof payload !== "undefined") {
         yield put({
            type: types.FETCH_WORD_SUCCESS,
            payload: digestResponse(payload)
         })
      } else {
         throw new Error("payload is undefined");
      }
   }
   catch(error) {
      yield put({
         type: types.FETCH_WORD_ERROR,
         error: error.message
      })
   }
}

export function fetchWordRequest({word, params}) {
   let { lang, filters } = params;
   let url = `https://od-api.oxforddictionaries.com/api/v2/entries/${lang}/${word}`;
   url += getFilterParams(filters);
   //console.log(url);
   return axios.get(url)
       .then(response => {
          return response;
       })
       .catch(error => {
          throw error
       })
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
                     url: p.audioFile
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
