import {all} from 'redux-saga/effects'
import {actionLogWatcher} from "./actionLogSaga";
import {searchWordWatcher} from "./searchWordSaga";
import {logStoreWatcher} from "./logStoreSaga";
import {fetchWordWatcher} from "./fetchWordSaga";
import {downloadWordAudioWatcher} from "./downloadWordAudioSaga";
import {updateQueuedSearchWatcher} from "./updateQueuedSearchSaga";
import {addSearchToQueueWatcher} from "./addSearchToQueueSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      actionLogWatcher(),
      addSearchToQueueWatcher(),
      downloadWordAudioWatcher(),
      fetchWordWatcher(),
      logStoreWatcher(),
      searchWordWatcher(),
      updateQueuedSearchWatcher()
   ])
}