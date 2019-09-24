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
    return prevState;
}

function digestUpdateWord(prevState, payload) {
    return prevState;
}

function digestRemoveWord(prevState, payload) {
    return prevState;
}