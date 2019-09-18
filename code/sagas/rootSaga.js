import {all} from 'redux-saga/effects'
import {searchWordWatcher} from "./searchWordSaga";
import {addWordWatcher} from "./addWordSaga";
import {cacheWordAudioWatcher} from "./cacheWordAudioSaga";
import {maxApiOutputWatcher} from "./maxApiOutputSaga";
import {searchWordsFromTextWatcher} from "./searchWordsFromTextSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      searchWordsFromTextWatcher(),
      searchWordWatcher(),
      addWordWatcher(),
      cacheWordAudioWatcher(),
      maxApiOutputWatcher()
   ])
}