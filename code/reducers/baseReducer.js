import {types} from "../actions/actionTypes";

export const baseReducer = (state={}, action) => {
    switch(action.type) {
        case types.CHANGE_LANGUAGE:
            return {
                ... state,
                lang: action.payload
            };
    }
};