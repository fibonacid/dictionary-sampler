import {types} from "../actions/actionTypes";
import _ from 'lodash';
import {SEARCH_STATUS} from "../lib/config/constants";

export const searchesReducer = (state={}, action) => {
    switch(action.type) {
        case types.ADD_SEARCH:
            return digestAddSearch(state, action.payload);
        case types.UPDATE_SEARCH_STATUS:
            return digestUpdateSearchStatus(state, action.payload);
        default:
            return state
    }
};

function digestAddSearch(prevState, payload) {
    const nextState = {};
    nextState[payload] = SEARCH_STATUS.QUEUED;
    return _.merge({}, prevState, nextState);
}

function digestUpdateSearchStatus(prevState, payload) {
    const nextState = {};
    nextState[payload.id] = payload.status;
    return _.merge({}, prevState, nextState);
}
