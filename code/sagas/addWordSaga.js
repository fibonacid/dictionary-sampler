import {types} from '../actions/actionTypes'
import { axiosConfig } from "../lib/helpers/axiosConfig";
import {cacheWordAudioAction} from "../actions/cacheWordAudioAction";
import {
   takeLatest,
   call,
   put,
   cancel,
   take
} from 'redux-saga/effects'

/**
 * FETCH WORD WATCHER
 * ==================
 * @returns {IterableIterator<any>}
 */
export function* addWordWatcher() {
   const saga = yield takeLatest(types.ADD_WORD, addWordSaga);
   // Listen if any there is any failure
   const failure = yield take(types.ADD_WORD_ERROR);
   // cancel saga if a failure as happened
   yield cancel(saga);
}

/**
 * FETCH WORD SAGA
 * ===============
 * @param action
 * @returns {IterableIterator<PutEffect<{payload: *, type: *}>|PutEffect<{type: *, error: *}>|CallEffect>}
 */
export function* addWordSaga(action) {
   try {
      const response = yield call(fetchWord, action.payload);
      if (typeof response !== "undefined") {
         const word = digestData(response.data);
         yield put({
            type: types.ADD_WORD_SUCCESS,
            payload: word
         });
         yield put(cacheWordAudioAction(word))
      } else {
         throw new Error("response is undefined");
      }
   }
   catch(error) {
      yield put({
         type: types.ADD_WORD_ERROR,
         error: error.message
      })
   }
}

/**
 * FETCH WORD REQUEST
 * ==================
 * @param word
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function fetchWord({word, params}) {
   let { lang, filters } = params;
   let url = `https://od-api.oxforddictionaries.com/api/v2/entries/${lang}/${word}`;
   //url += `?${getFilterParams(filters)}`;
   //console.log(url);
   return axiosConfig.get(url)
       .then(response => {
          return response;
       })
       .catch(error => {
          throw error
       })
}

/**
 * DIGEST RESPONSE
 * ===============
 * @param data
 * @returns {SpeechRecognitionResultList|{language: *, id: *, pronunciations: *}}
 */
function digestData(data) {
   // If object is composed as expected
   if (data && data.results && data.results.length > 0) {
      // Retrieve word
      const word = data.results[0];
      const { id, language, lexicalEntries } = word;
      const pronunciations = {};

      // Loop through every lexical entry
      lexicalEntries.forEach( entry => {
         // If there's a registry called pronunciations
         if (entry.pronunciations &&
            Array.isArray(entry.pronunciations)
         ) {
            // Loop through every pronunciation
            entry.pronunciations.forEach( pronunciation => {
                const { audioFile, phoneticSpelling } = pronunciation;
               // If thers an audio file attached:
               if (audioFile && phoneticSpelling) {
                  // Add it to the list
                  pronunciations[`${phoneticSpelling}`] = {
                     url: audioFile
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

/**
 * GET FILTER PARAMS
 * =================
 * @param filters
 * @returns {string}
 */
function getFilterParams(filters) {
   if (!filters) {
       return;
   }
  let params = "fields=";
  filters.forEach((filter) => {
     if (typeof filter === "string") {
        params += filter;
        if (filter !== [...filters].pop()) {
           params += "%26%26"
        }
     }
  });
  return params;
}

/*
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
};*/