import {types} from '../actions/actionTypes'
import { takeLatest } from 'redux-saga/effects'

export function* changeDestLangWatcher() {
    yield takeLatest(types.CHANGE_DEST_LANG, changeDestLangSaga);
}

export function* changeDestLangSaga(action) {

}