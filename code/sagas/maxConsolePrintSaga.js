import {errorTypes, types} from '../actions/actionTypes'
import { takeEvery } from 'redux-saga/effects'
import { maxApi } from "../lib/config/maxApi"

export function* maxConsolePrintWatcher() {
    yield takeEvery(types.MAX_CONSOLE_PRINT, maxConsolePrintSaga);
}

export function* maxConsolePrintSaga(action) {
    const { message, level } = action.payload;
    const postLevel = getPostLevelFromActionType(action.type);
    maxApi.post(message, postLevel);
}

function getPostLevelFromActionType(type) {
    if (Object.values(errorTypes()).includes(type)) {
        return maxApi.POST_LEVELS.ERROR;
    }
    //const warningTypes = Object.values(warningTypes());
    //if (errorTypes.includes(type)) return ERROR;
    return maxApi.POST_LEVELS.INFO;
}
