import {types} from '../actions/actionTypes'
import {takeLatest, call, put, select, take, cancel, actionChannel} from 'redux-saga/effects'
import uniqueFileName from "unique-filename";
import {download} from "../lib/helpers/download";
import {updateWordAction} from "../actions/updateWordAction";
import {maxApiOutputAction} from "../actions/maxApiOutputAction";
import {selectWord} from "../lib/helpers/common";

export function* cacheWordAudioWatcher() {
   // 1- Create a channel for request actions
   const requestChan = yield actionChannel(types.CACHE_WORD_AUDIO);
   while (true) {
      // 2- take from the channel
      const action = yield take(requestChan);
      // 3- Note that we're using a blocking call
      yield call(cacheWordAudioSaga, action);
   }
}

export function* cacheWordAudioSaga(action) {
   try {
      const word = action.payload;
      const urls = getUrls(word);
      /*if (urls.length === 0) {
         throw new Error(`no audio files found for ${word.id}`);
      }*/
      const path = yield call(downloadAudio, urls[0]);
      if (typeof path != "undefined") {
         yield put({
            type: types.CACHE_WORD_AUDIO_SUCCESS,
            payload: path
         });
         yield put(updateWordAction(word.id, {
            audio_file: path
         }));
         const updated_word = yield select(selectWord, word.id);
         yield put(maxApiOutputAction(updated_word));
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