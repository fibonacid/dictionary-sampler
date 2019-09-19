import {types} from '../actions/actionTypes'
import { takeLatest } from 'redux-saga/effects'

export function* changeSrcLangWatcher() {
    yield takeLatest(types.CHANGE_SRC_LANG, changeSrcLangSaga);
}

export function* changeSrcLangSaga(action) {

}