import {types} from '../actions/actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import { download } from '../lib/helpers/download'
import {cacheWordAudioAction} from "../actions/cacheWordAudioAction";

export function* cacheWordAudioWatcher() {
   const saga = yield takeLatest(types.CACHE_WORD_AUDIO, cacheWordAudioAction)
}

export function* cacheWordAudioSaga(action) {
   const payload = yield call(downloadAudio, action.payload);
}


function downloadAudio(payload) {
   const filename = "";
   const location = "";
   console.log("downloadAudio");
}