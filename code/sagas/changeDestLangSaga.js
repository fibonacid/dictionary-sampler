import {types} from '../actions/actionTypes'
import {put, takeLatest} from 'redux-saga/effects'
import {isValidLang} from "../lib/helpers/common";
import {OXFORD_API} from "../lib/config/apiConstants";

export function* changeDestLangWatcher() {
    yield takeLatest(types.CHANGE_DEST_LANG, changeDestLangSaga);
}

export function* changeDestLangSaga(action) {
    try {
        const lang = action.payload;
        if (isValidLang(lang)) {
            yield put({
                type: types.CHANGE_DEST_LANG_SUCCESS,
                payload: OXFORD_API.LANGUAGES[lang]
            })
        } else {
            throw new Error(`Unknown language: ${lang}`)
        }
    }
    catch(error) {
        yield put({
            type: types.CHANGE_DEST_LANG_ERROR,
            error
        })
    }
}