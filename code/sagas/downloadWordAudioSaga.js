import {types} from "../actions/actionTypes";
import {takeEvery} from "redux-saga/effects";

export function* downloadWordAudioWatcher() {
    yield takeEvery(types.DOWNLOAD_WORD_AUDIO, downloadWordAudioSaga);
}

export function* downloadWordAudioSaga(action) {
    const word = action.payload;
    if (word && word.audioFileUrl) {
        const url = word.audioFileUrl;

    }
}