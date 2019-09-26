import {types} from "../actions/actionTypes";

const initialState = {
    data: {},
    index: {}
};

export const wordsReducer = function(state=initialState, action) {
    switch(action.type) {
        case types.FETCH_WORD_SUCCESS:
            return digestNewWord(state, action.payload);
        case types.UPDATE_WORD:
            return digestUpdateWord(state, action.payload);
        case types.REMOVE_WORD:
            return digestRemoveWord(state, action.payload);
        default:
            return state;
    }
};

function digestNewWord(prevState, payload) {
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
    return prevState;
}

function digestRemoveWord(prevState, payload) {
    return prevState;
}