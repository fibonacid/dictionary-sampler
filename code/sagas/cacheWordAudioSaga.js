import {types} from '../actions/actionTypes'
import {takeLatest, call, put, select, take, cancel, actionChannel} from 'redux-saga/effects'
import uniqueFileName from "unique-filename";
import {download} from "../lib/helpers/download";
import {updateWordAction} from "../actions/updateWordAction";
import {maxObjectOutputAction} from "../actions/maxObjectOutputAction";
import {selectSearch, selectWord} from "../lib/helpers/common";
import {updateSearchStatusAction} from "../actions/updateSearchStatusAction";
import {SEARCH_STATUS} from "../lib/config/constants";

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

         yield put(updateSearchStatusAction(word.search_id, `${SEARCH_STATUS.AVAILABLE} ${path}`));

         //yield put(maxObjectOutputAction(path));

      } else {
         throw new Error("cache file couldn't be generated")
      }
   }
   catch(error) {
      yield put({
         type: types.CACHE_WORD_AUDIO_ERROR,
         error: error.message
      });
      const search = yield select(selectSearch, action.payload);
      if (search) {
         yield put(
             updateSearchStatusAction(search.id, SEARCH_STATUS.UNAVAILABLE)
         );
      }
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