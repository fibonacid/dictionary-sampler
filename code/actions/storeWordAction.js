import {types} from "./actionTypes";

export const storeWordAction = word => ({
    type: types.STORE_WORD,
    payload: word
});