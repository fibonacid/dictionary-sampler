import {types} from "../actions/actionTypes";

const initialState = {
    data: {},
    index: {}
};

export const wordsReducer = function(state=initialState, action) {
    switch(action.type) {
        case types.FETCH_WORD_SUCCESS:
            return digestAddWord(state, action.payload);
        case types.UPDATE_WORD:
            return digestUpdateWord(state, action.payload);
        case types.REMOVE_WORD:
            return digestRemoveWord(state, action.payload);
        case types.DOWNLOAD_WORD_AUDIO_SUCCESS:
            return digestDownloadAudio(state, action.payload);
        default:
            return state;
    }
};

function digestAddWord(prevState, payload) {
    const nextState = {
        data: {},
        index: []
    };
    if (payload) {
        nextState.data[payload.id] = payload;
        nextState.index.push(payload.id);
    }
    const data = _.merge({}, prevState.data, nextState.data);
    const index = _.union([], prevState.index, nextState.index);
    return { index, data }
}

function digestUpdateWord(prevState, payload) {
    const nextState = {
        data: {},
        index: []
    };
    nextState.data[payload.id] =
        _.assign(nextState.data[payload.id], payload.args);

    const data = _.merge({}, prevState.data, nextState.data);
    const index = _.union([], prevState.index, nextState.index);

    console.log(`digestUpdateWord: ${JSON.stringify(payload, null, 1)}`);

    return { data, index };
}

function digestDownloadAudio(prevState, payload) {
    return digestUpdateWord(prevState, {
        id: payload.wordId,
        args: { localfile: payload.filename}
    })
}

function digestRemoveWord(prevState, payload) {
    return prevState;
}