import {types} from "./actionTypes";

export const addSearchToQueueAction = (searchId, query) => ({
    type: types.ADD_SEARCH_TO_QUEUE,
    payload: {
        searchId,
        query
    }
});