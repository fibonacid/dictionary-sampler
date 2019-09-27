import {types} from "../actions/actionTypes";
import _ from 'lodash';
import {QUEUE_STATUS} from "../lib/config/constants";

const initialState = {};

export const queueReducer = (state=initialState, action) => {
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
    const newState = {};
    newState[payload.searchId] = {
        query: payload.query,
        status: QUEUE_STATUS.QUEUED
    };
    return _.merge({}, prevState, newState);
}

function digestUpdateSearch(prevState, payload) {
    const nextState = {};
    nextState[payload.id] = {
        status: payload.status
    };
    return _.merge({}, prevState, nextState);
}

function digestRemoveSearch(prevState, payload) {
    return prevState;
}