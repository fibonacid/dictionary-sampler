import types from '../actions/actionTypes'
import { takeLatest, delay, put, race } from 'redux-saga/effects'
import axios from 'axios'

export function* getWordWatcher() {
   const saga = yield takeLatest(types.GET_WORD, getWordSaga)
}
