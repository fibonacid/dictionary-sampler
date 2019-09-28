import {types} from "./actionTypes";

export const removeSearchFromQueueAction = searchId => ({
    type: types.REMOVE_SEARCH_FROM_QUEUE,
    payload: searchId
});