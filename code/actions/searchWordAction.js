import {types} from "./actionTypes";

export const searchWordAction = word => ({
   type: types.SEARCH_WORD,
   payload: word
});

export const searchWordSuccessAction = searchId => ({
   type: types.SEARCH_WORD_SUCCESS
});

export const searchWordTimeoutAction = searchId => ({
   type: types.SEARCH_WORD_TIMEOUT
});