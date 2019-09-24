import {types} from "./actionTypes";

export const removeSearchFromQueueAction = searchId => ({
    type: types.UPDATE_QUEUED_SEARCH,
    payload: searchId
});