import {types} from "./actionTypes";

export const updateWordAction = (id, args) => ({
    type: types.UPDATE_WORD,
    payload: { id, args }
});