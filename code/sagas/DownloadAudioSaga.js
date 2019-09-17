import { types } from '../actions/actionTypes';
import uniqueFileName from 'unique-filename';
import { download } from "../lib/helpers/download";
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
        const path = yield call(downloadAudio, action.payload);
        if (typeof path !== "undefined") {
            yield put({
                type: types.DOWNLOAD_AUDIO_FILE_SUCCESS,
                payload: path
            })
        } else {
            throw new Error("path is undefined");
        }
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
    return download(url, path)
        .then(() => {
            return path;
        })
        .catch(error => {
            throw error;
        })
}

function generateCacheFile() {
    const dir = `${global.appRoot}/cache`;
    let filename = uniqueFileName(dir);
    return filename + ".mp3";
};

