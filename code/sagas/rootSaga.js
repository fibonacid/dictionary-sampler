import {all} from 'redux-saga/effects'
import {actionLogWatcher} from "./actionLoggerSaga";
import {searchWordWatcher} from "./searchWordSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      actionLogWatcher(),
      searchWordWatcher()
   ])
}