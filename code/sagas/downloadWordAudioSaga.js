import {types} from "../actions/actionTypes";
import {takeEvery, call, put} from "redux-saga/effects";
import uniqueFileName from 'unique-filename';
import {download} from '../lib/helpers/download'
import {
    downloadWordAudioSuccessAction,
    downloadWordAudioErrorAction
} from "../actions/downloadWordAudioAction";

export function* downloadWordAudioWatcher() {
    yield takeEvery(types.DOWNLOAD_WORD_AUDIO, downloadWordAudioSaga);
}

export function* downloadWordAudioSaga(action) {
    const word = action.payload;
    if (word && word.audioFileUrl) {
        const url = word.audioFileUrl;
        try {
            // Launch download audio task and
            // store path of downloaded file
            const path = yield call(downloadAudio, url);
            // If path is undefined
            if (typeof path !== "undefined") {
                // Dispatch Success
                yield put(downloadWordAudioSuccessAction(path));
            } else {
                throw new Error('path is undefined');
            }
        } catch(error) {
            yield put(downloadWordAudioErrorAction(error));
        }
    }
}

function downloadAudio(url) {
    // Generate random filename
    const dir = `${global.appRoot}/cache`;
    const filepath = `${uniqueFileName(dir)}.mp3`;
    // Return promise
    return download(url, filepath)
        .then( path => {
            return path
        })
        .then( error => {
            throw error
        });
}

