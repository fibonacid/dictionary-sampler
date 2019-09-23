import {types} from "../actions/actionTypes";
import _ from 'lodash';

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
    const nextState = [];
    const count = Object.keys(prevState).length;
    nextState[`${payload.id}-${count}`] = {
        id: count,
        status: payload.status
    };
    return _.merge({}, prevState, nextState);
}

function digestUpdateSearchStatus(prevState, payload) {
    const nextState = {};
    nextState[payload.id] = {
        status: payload.status
    };
    return _.merge({}, prevState, nextState);
}
