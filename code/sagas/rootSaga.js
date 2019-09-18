import {all} from 'redux-saga/effects'
import {searchWordWatcher} from "./searchWordSaga";
import {addWordWatcher} from "./addWordSaga";
import {cacheWordAudioWatcher} from "./cacheWordAudioSaga";
import {maxObjectOutputWatcher} from "./maxObjectOutputSaga";
import {searchWordsFromTextWatcher} from "./searchWordsFromTextSaga";
import {maxConsolePrintWatcher} from "./maxConsolePrintSaga";
import {logStoreWatcher} from "./logStore";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      searchWordsFromTextWatcher(),
      searchWordWatcher(),
      addWordWatcher(),
      cacheWordAudioWatcher(),
      maxObjectOutputWatcher(),
      maxConsolePrintWatcher(),
      logStoreWatcher()
   ])
}