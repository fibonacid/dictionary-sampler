import {types} from "./actionTypes";

export const searchWordAction = word => ({
   type: types.SEARCH_WORD,
   payload: word
});