import {types} from '../actions/actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import { download } from '../lib/helpers/download'
import uniqueFilename from 'unique-filename';

export function* cacheWordAudioWatcher() {
   const saga = yield takeLatest(types.CACHE_WORD_AUDIO, cacheWordAudioSaga)
}

export function* cacheWordAudioSaga(action) {
   const payload = yield call(downloadAudio, action.payload);
}

const path = require('path');

function downloadAudio(payload) {
   const { id, pronunciations } = payload;
   const dir = path.resolve(__dirname, "../../cache");
   if (pronunciations) {
      Object.keys(pronunciations).forEach(function(key) {
         const filename = uniqueFilename(dir, id);
         let { url } = pronunciations[key];
         console.log(`cache file: ${filename}`);
         download(url, filename)
            .then(function () {
               console.log(`${key} loaded`);
            })
            .catch( error => {
               console.log(error);
            })
      });
   }
}