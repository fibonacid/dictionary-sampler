import {types} from "./actionTypes";

export const updateSearchStatusAction = (id, status) => ({
    type: types.UPDATE_SEARCH_STATUS,
    payload: { id, status }
});