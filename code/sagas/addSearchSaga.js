import { takeLatest, put, select } from 'redux-saga/effects'
import {types} from "../actions/actionTypes";
//import {maxObjectOutputAction} from "../actions/maxObjectOutputAction";
import {POLY_METHODS} from "../lib/config/maxConstants";
import {maxObjectOutputAction, maxObjectPolyMessage} from "../actions/maxObjectOutputAction";

export function* addSearchWatcher() {
    yield takeLatest(types.ADD_SEARCH, addSearchSaga);
}



export function* addSearchSaga(action) {
    //const { id, status } = action.payload;
    const searches = yield select(state => state.searches );
    const count = Object.keys(searches).length;
    //yield put(maxObjectPolyMessage(POLY_METHODS.NOTE, count, ""));
    yield put(maxObjectOutputAction(`${POLY_METHODS.NOTE} ${count}`))
    return count;
}