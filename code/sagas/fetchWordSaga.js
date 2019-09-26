import {takeEvery, call} from "redux-saga/effects";
import {types} from "../actions/actionTypes";
import {OxfordApi} from "../lib/helpers/OxfordApi";
import _ from 'lodash'

export function* fetchWordWatcher() {
    yield takeEvery(types.FETCH_WORD, fetchWordSaga)
}

export function* fetchWordSaga(action) {
    const word = action.payload;
    const response = yield call(OxfordApi.searchWord, word);
    const fetchedWord = digestResponse(response);
    console.log(fetchedWord);
}

function digestResponse(response) {
    const { data } = response;
    if (!data ||
        !data.results
        || data.results.length === 0) {
        return undefined;
    }
    let outputObject = {};
    // Retrieve first one
    const result = data.results[0];
    const { id, lexicalEntries } = result;
    // Add id property to the word object
    outputObject.id = id;
    // Get first lexical entry with property "pronunciations"
    const entry = _.find(lexicalEntries, e => e.pronunciations);
    if (entry) {
        const { audioFile } = _.find(entry.pronunciations, p => {
            return typeof p.audioFile != "undefined"
        });
        outputObject.audioFileUrl = audioFile;
    }
    return outputObject;
}
