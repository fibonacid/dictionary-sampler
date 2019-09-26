import {types} from "./actionTypes";

export const fetchWordAction = query => ({
   type: types.FETCH_WORD,
   payload: query
});

export const fetchWordSuccess = word => ({
   type: types.FETCH_WORD_SUCCESS,
   payload: word
});

export const fetchWordErrorAction = (e) => ({
   type: types.FETCH_WORD_ERROR,
   error: e
});