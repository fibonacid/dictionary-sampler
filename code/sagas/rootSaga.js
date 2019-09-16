import {all} from 'redux-saga/effects'
import {searchWordWatcher} from "./searchWordSaga";
import {fetchWordWatcher} from "./fetchWordSaga";
import {cacheWordAudioWatcher} from "./cacheWordAudioSaga";


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      searchWordWatcher(),
      fetchWordWatcher(),
      cacheWordAudioWatcher()
   ])
}