import {types} from "../actions/actionTypes";
import _ from 'lodash'

export const baseReducer = (state={}, action) => {
    switch(action.type) {
        case types.CHANGE_SRC_LANG_SUCCESS:
            return digestChangeSrcLang(state, action.payload);
        case types.CHANGE_DEST_LANG_SUCCESS:
            return digestChangeDestLang(state, action.payload);
        default:
            return state;
    }
};

function digestChangeSrcLang(prevState, payload) {
    return prevState;
}

function digestChangeDestLang(prevState, payload) {
    return prevState;
}