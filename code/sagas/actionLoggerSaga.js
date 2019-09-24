import {takeEvery} from "redux-saga/effects";
import {maxApi} from "../lib/config/maxApi";

export function* actionLogWatcher() {
    yield takeEvery('*', function* logger(action) {
        let message = action.type;
        if (action.payload || action.error) {
            message += " => ";
            message += action.payload || action.error;
        }
        maxApi.post(message);
    })
};
