import {types} from "./actionTypes";

export const updateWordAction = (id, status) => ({
    type: types.UPDATE_WORD,
    payload: { id, status }
});