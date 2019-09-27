import {types} from "./actionTypes";

export const updateQueuedSearchAction = (searchId, status, result) => ({
    type: types.UPDATE_QUEUED_SEARCH,
    payload: {
        searchId,
        args: {
            status,
            result
        }
    }
});