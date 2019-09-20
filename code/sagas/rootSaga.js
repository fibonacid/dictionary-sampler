import {all} from 'redux-saga/effects'
import {searchWordWatcher} from "./searchWordSaga";
import {addWordWatcher} from "./addWordSaga";
import {cacheWordAudioWatcher} from "./cacheWordAudioSaga";
import {maxObjectOutputWatcher} from "./maxObjectOutputSaga";
import {searchWordsFromTextWatcher} from "./searchWordsFromTextSaga";
import {maxConsolePrintWatcher} from "./maxConsolePrintSaga";
import {logStoreWatcher} from "./logStore";
import {stopAllWatcher} from "./stopAllSaga";
import {clearCacheWatcher} from "./clearCacheSaga";
import {changeSrcLangWatcher} from "./changeSrcLangSaga";
import {changeDestLangWatcher} from "./changeDestLangSaga";
import {resetAppWatcher} from "./resetAppSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      addWordWatcher(),
      cacheWordAudioWatcher(),
      changeSrcLangWatcher(),
      changeDestLangWatcher(),
      clearCacheWatcher(),
      logStoreWatcher(),
      maxObjectOutputWatcher(),
      maxConsolePrintWatcher(),
      resetAppWatcher(),
      searchWordsFromTextWatcher(),
      searchWordWatcher(),
      stopAllWatcher(),
   ])
}