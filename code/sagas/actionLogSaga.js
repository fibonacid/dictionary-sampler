import {takeEvery} from "@redux-saga/core/effects";
import {errorTypes} from "../actions/actionTypes";
import {maxApi} from "../lib/config/maxApi";

export function* actionLogWatcher() {
    yield takeEvery('*', function* logger(action) {
        const postLevel = getPostLevelFromActionType(action.type);
        const message = `${action.type} ${action.payload}`;
        maxApi.post(message, postLevel);
        //maxApi.outlet(`event ${action.type}`);
    })
};

function getPostLevelFromActionType(type) {
    if (Object.values(errorTypes()).includes(type)) {
        return maxApi.POST_LEVELS.ERROR;
    }
    //const warningTypes = Object.values(warningTypes());
    //if (errorTypes.includes(type)) return ERROR;
    return maxApi.POST_LEVELS.INFO;
}

