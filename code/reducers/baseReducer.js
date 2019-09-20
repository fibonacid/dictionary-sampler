import {types} from "../actions/actionTypes";
import _ from 'lodash'
import {OXFORD_API} from "../lib/config/apiConstants";

const initialState = {
    src_lang: OXFORD_API.LANGUAGES.EN_US,
    dest_lang: OXFORD_API.LANGUAGES.EN_US
};

export const baseReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.CHANGE_SRC_LANG_SUCCESS:
            return digestChangeSrcLang(state, action.payload);
        case types.CHANGE_DEST_LANG_SUCCESS:
            return digestChangeDestLang(state, action.payload);
        default:
            return state
    }
};

function digestChangeSrcLang(prevState, payload) {
    const newState = { src_lang: payload };
    return _.merge({}, prevState, newState);
}

function digestChangeDestLang(prevState, payload) {
    const newState = { dest_lang: payload };
    return _.merge({}, prevState, newState);
}