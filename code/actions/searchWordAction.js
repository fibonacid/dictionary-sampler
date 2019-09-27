import {types} from "./actionTypes";

export const searchWordAction = word => ({
   type: types.SEARCH_WORD,
   payload: word
});

export const searchWordSuccessAction = (searchId, result) => ({
   type: types.SEARCH_WORD_SUCCESS,
   payload: {
      searchId,
      result
   }
});

export const searchWordTimeoutAction = (searchId, message) => ({
   type: types.SEARCH_WORD_TIMEOUT,
   payload: {
      searchId,
      message
   }
});

export const searchWordErrorAction = (searchId, error) => ({
   type: types.SEARCH_WORD_ERROR,
   payload: {
      searchId,
      error
   }
});

