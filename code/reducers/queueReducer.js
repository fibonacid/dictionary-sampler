import {types} from "../actions/actionTypes";

export const queueReducer = (state={}, action) => {
    switch(action.type) {
        case types.ADD_SEARCH_TO_QUEUE:
            return digestNewSearch(state, action.payload);
        case types.UPDATE_QUEUED_SEARCH:
            return digestUpdateSearch(state, action.payload);
        case types.REMOVE_SEARCH_FROM_QUEUE:
            return digestRemoveSearch(state, action.payload);
        default:
            return state;
    }
};

function digestNewSearch(prevState, payload) {
    return prevState;
}

function digestUpdateSearch(prevState, payload) {
    return prevState;
}

function digestRemoveSearch(prevState, payload) {
    return prevState;
}