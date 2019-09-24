import {types} from "./actionTypes";

export const updateQueuedSearchAction = (searchId, status) => ({
    type: types.UPDATE_QUEUED_SEARCH,
    payload: {
        searchId,
        status
    }
});