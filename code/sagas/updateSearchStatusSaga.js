import {put, takeEvery, select, delay} from "redux-saga/effects";
import {types} from "../actions/actionTypes";
import {maxObjectOutputAction} from "../actions/maxObjectOutputAction";
import {selectSearch} from "../lib/helpers/common";
import {POLY_METHODS} from "../lib/config/maxConstants";

export function* updateSearchStatusWatcher() {
    yield takeEvery(types.UPDATE_SEARCH_STATUS, updateSearchStatusSaga)
}

export function* updateSearchStatusSaga(action) {
    const { id, message } = action.payload;
    const search = yield select(selectSearch, id);

    yield put(maxObjectOutputAction(`${POLY_METHODS.TARGET} ${search.id}`));
    //yield delay(1);
    yield put(maxObjectOutputAction(message));
}