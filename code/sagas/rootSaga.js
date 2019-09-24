import {all} from 'redux-saga/effects'
import {actionLogWatcher} from "./actionLogSaga";
import {searchWordWatcher} from "./searchWordSaga";
import {logStoreWatcher} from "./logStoreSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      actionLogWatcher(),
      logStoreWatcher(),
      searchWordWatcher()
   ])
}