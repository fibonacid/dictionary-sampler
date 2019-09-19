import {types} from '../actions/actionTypes'
import { takeLatest, put } from 'redux-saga/effects'
import {isValidLang} from "../lib/helpers/common";
import {OXFORD_API} from "../lib/config/apiConstants";

export function* changeSrcLangWatcher() {
    yield takeLatest(types.CHANGE_SRC_LANG, changeSrcLangSaga);
}

export function* changeSrcLangSaga(action) {
    try {
        const lang = action.payload;
        if (isValidLang(lang)) {
            yield put({
                type: types.CHANGE_SRC_LANG_SUCCESS,
                payload: OXFORD_API.LANGUAGES[lang]
            })
        } else {
            throw new Error(`Unknown language: ${lang}`)
        }
    }
    catch(error) {
        yield put({
            type: types.CHANGE_SRC_LANG_ERROR,
            error
        })
    }
}