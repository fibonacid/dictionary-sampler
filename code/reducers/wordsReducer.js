import {types} from "../actions/actionTypes";

export const wordsReducer = function(state={}, action) {
    switch(action.type) {
        case types.STORE_WORD:
            return digestStoreWord(state, action.payload);
        case types.UPDATE_WORD:
            return digestUpdateWord(state, action.payload);
        case types.REMOVE_WORD:
            return digestRemoveWord(state, action.payload);
        default:
            return state;
    }
}

function digestStoreWord(prevState, payload) {
    const nextState = {
        data: {},
        index: []
    };

    const { word } = payload;
    if (word) {
        nextState.data[word.id] = word;
        nextState.index.push(word.id);
    }
    const data = _.merge({}, prevState.data, nextState.data);
    const index = _.union([], prevState.index, nextState.index);
    return { index, data }
}

function digestUpdateWord(prevState, payload) {
    return prevState;
}

function digestRemoveWord(prevState, payload) {
    return prevState;
}