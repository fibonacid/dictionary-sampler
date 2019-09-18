import {types} from '../actions/actionTypes'
import { takeLatest, select, call, put, all } from 'redux-saga/effects'
import { maxApi } from "../lib/config/maxApi"

export function* maxApiOutputWatcher() {
    const saga = yield takeLatest(types.MAX_API_OUTPUT, maxApiOutputSaga);
}

export function* maxApiOutputSaga(action) {
    const { audio_file } = action.payload;
    if (audio_file) {
        yield maxApi.outlet(audio_file);
    }
}