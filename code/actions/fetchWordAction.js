import {types} from "./actionTypes";

export const fetchWordAction = word => ({
   type: types.FETCH_WORD,
   payload: word
});