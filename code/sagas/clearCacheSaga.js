import { takeLatest, call, put } from 'redux-saga/effects'
import {types} from "../actions/actionTypes";
import {clearCacheError, clearCacheSuccess} from "../actions/clearCacheAction";

export function* clearCacheWatcher() {
    yield takeLatest(types.CLEAR_CACHE, clearCacheSaga);
}

export function* clearCacheSaga() {
    const dir = `${global.appRoot}/cache`;
    try {
        yield call(deleteAllFilesFromDir, dir);
        yield put(clearCacheSuccess());
    }
    catch (error) {
        yield put(clearCacheError(error));
    }
}

const path = require('path');
const fs = require('fs');

function deleteAllFilesFromDir(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(dir, file), err => {
                if (err) throw err;
            });
        }
    });
}