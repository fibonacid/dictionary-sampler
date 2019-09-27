import {types} from "./actionTypes";
import {QUEUE_STATUS} from "../lib/config/constants";

export const addSearchToQueueAction = (searchId, query, polyTarget) => ({
    type: types.ADD_SEARCH_TO_QUEUE,
    payload: {
        searchId,
        args: {
            polyTarget,
            query,
            status: QUEUE_STATUS.QUEUED
        }
    }
});