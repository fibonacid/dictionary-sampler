import {types} from "./actionTypes";

export const setMaxSearchesAction = number => ({
    type: types.SET_MAX_SEARCHES,
    payload: number
});