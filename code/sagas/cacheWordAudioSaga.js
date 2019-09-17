import {types} from '../actions/actionTypes'
import {takeLatest, call, put, select, take, cancel} from 'redux-saga/effects'
import uniqueFileName from "unique-filename";
import {download} from "../lib/helpers/download";

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
      const path = yield call(downloadAudio, urls[0]);
      if (typeof path != "undefined") {
         yield put({
            type: types.CACHE_WORD_AUDIO_SUCCESS,
            payload: path
         })
      } else {
         throw new Error("cache file couldn't be generated")
      }
   }
   catch(error) {
      yield put({
         type: types.CACHE_WORD_AUDIO_ERROR,
         error: error.message
      })
   }
}

function downloadAudio(url) {
   const path = generateCacheFile();
   return download(url, path)
       .then(() => {
          return path;
       })
       .catch(error => {
          throw error;
       })
}

function generateCacheFile() {
   const dir = `${global.appRoot}/cache`;
   let filename = uniqueFileName(dir);
   return filename + ".mp3";
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