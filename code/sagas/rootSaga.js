import {all} from 'redux-saga/effects'
import {searchWordWatcher} from "./searchWordSaga";
import {addWordWatcher} from "./addWordSaga";
import {cacheWordAudioWatcher} from "./cacheWordAudioSaga";
import {downloadAudioFileWatcher} from "./DownloadAudioSaga";


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
   yield all([
      searchWordWatcher(),
      addWordWatcher(),
      cacheWordAudioWatcher(),
   ])
}