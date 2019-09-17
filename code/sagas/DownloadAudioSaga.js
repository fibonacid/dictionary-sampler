import { types } from '../actions/actionTypes';
import uniqueFileName from 'unique-filename'
import {
    takeLatest,
    call,
    put,
    cancel,
    take
} from 'redux-saga/effects'

export function* downloadAudioFileWatcher() {
    const saga = yield takeLatest(types.DOWNLOAD_AUDIO_FILE, downloadAudioFileSaga);
    // Listen if any there is any failure
    const failure = yield take(types.DOWNLOAD_AUDIO_FILE_ERROR);
    // cancel saga if a failure as happened
    yield cancel(saga);
}

export function* downloadAudioFileSaga(action) {
    try {
        const { payload } = yield call(downloadAudio, action.payload);
    }
    catch(error) {
        yield put({
            type: types.DOWNLOAD_AUDIO_FILE_ERROR,
            error: error.message
        })
    }
}

function downloadAudio(url) {
    const path = generateCacheFile();
    return { payload: path }
}

function generateCacheFile() {
    const dir = `${global.appRoot}/cache`;
    let filename = uniqueFileName(dir);
    return filename + ".mp3";
};

