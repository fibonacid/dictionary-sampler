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
import {actionLogWatcher} from "./actionLogSaga";
import {updateSearchStatusWatcher} from "./updateSearchStatusSaga";
import {addSearchWatcher} from "./addSearchSaga";
import {searchWordsFromWebpageWatcher} from "./searchWordsFromWebPageSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      actionLogWatcher(),
      addWordWatcher(),
      addSearchWatcher(),
      cacheWordAudioWatcher(),
      changeSrcLangWatcher(),
      changeDestLangWatcher(),
      clearCacheWatcher(),
      logStoreWatcher(),
      maxObjectOutputWatcher(),
      maxConsolePrintWatcher(),
      resetAppWatcher(),
      searchWordsFromTextWatcher(),
      searchWordsFromWebpageWatcher(),
      searchWordWatcher(),
      stopAllWatcher(),
      updateSearchStatusWatcher()
   ])
}