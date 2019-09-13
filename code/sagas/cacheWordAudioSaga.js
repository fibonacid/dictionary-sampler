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
const tmp = require('tmp');

function downloadAudio(payload) {
   const { pronunciations } = payload;
   const dir = `${global.appRoot}/cache`;
   const cacheDir = path.resolve(dir, "");
   console.log(`cache directory: ${cacheDir}`);
   if (pronunciations) {
      Object.keys(payload.pronunciations).forEach(function(key) {
         const filename = uniqueFilename(cacheDir) + ".mp3";
         let { url } = pronunciations[key];
         console.log(`file for ${key}: ${filename}`);
         download(url, filename)
            .then(() => { console.log(`download finished`) })
            .catch(error => { console.log(error) })
      });
   }
}

/*
 const options = {
            prefix: filename,
            postfix: `.mp3`,
            dir: `${global.appRoot}/cache`
         };
 tmp.file(options, (err, path) => {
            if (err) throw err;
            download(url, filename)
               .then(function () {
                  console.log(`${key}: download complete`);
               })
               .catch( error => {
                  console.log(error);
               })
         });
 */