import {types} from "./actionTypes";

export const addSearchToQueueAction = query => ({
    type: types.ADD_SEARCH_TO_QUEUE,
    payload: query
});