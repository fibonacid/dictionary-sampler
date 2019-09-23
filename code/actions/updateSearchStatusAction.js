import {types} from "./actionTypes";

export const updateSearchStatusAction = (id, message) => ({
    type: types.UPDATE_SEARCH_STATUS,
    payload: { id, message }
});