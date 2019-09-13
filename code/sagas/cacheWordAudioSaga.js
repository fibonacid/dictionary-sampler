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
   const filename = uniqueFilename(
      path.resolve(__dirname, "../../cache"),
      payload.id
   );
   console.log(`cache file: ${filename}`);
}