import {types} from '../actions/actionTypes'
import { takeLatest, call, put, all } from 'redux-saga/effects'

export function* cacheWordAudioWatcher() {
   const saga = yield takeLatest(types.CACHE_WORD_AUDIO, cacheWordAudioSaga)
}

export function* cacheWordAudioSaga(action) {
   const { urls } = yield call(getUrls, action.payload);
   try {
      if (typeof urls !== "undefined") {
         yield put({ type: types.CACHE_WORD_AUDIO_SUCCESS, payload: urls})
      }
   }
   catch(error) {
      yield put({ type: types.CACHE_WORD_AUDIO_ERROR, error})
   }
}

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