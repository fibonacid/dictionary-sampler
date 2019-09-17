import {types} from '../actions/actionTypes'
import {takeLatest, call, put, select, take, cancel} from 'redux-saga/effects'

export function* cacheWordAudioWatcher() {
   const saga = yield takeLatest(types.CACHE_WORD_AUDIO, cacheWordAudioSaga);
   // Listen if any there is any failure
   const failure = yield take(types.CACHE_WORD_AUDIO_ERROR);
   // cancel saga if a failure as happened
   yield cancel(saga);
}

export function* cacheWordAudioSaga(action) {
   try {
      const urls = getUrls(action.payload);
      const { payload } = yield put({
         type: types.DOWNLOAD_AUDIO_FILE,
         payload: urls[0]
      });
      //console.log(payload)
   }
   catch(error) {
      yield put({
         type: types.CACHE_WORD_AUDIO_ERROR,
         error: error.message
      })
   }
}

const wordSelector = (state, word) => {
   const { data } = state.words;
   if (!data || !word) {
      return;
   }
   return data[word];
};

function getUrls(payload) {
   const { pronunciations } = payload;
   let urls = [];
   if (pronunciations) {
      Object.keys(payload.pronunciations).forEach(function(key) {
         let { url } = pronunciations[key];
         urls.push(url);
      });
   }
   return urls;
}