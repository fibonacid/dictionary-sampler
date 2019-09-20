import {types} from "./actionTypes";
import {SEARCH_STATUS} from "../lib/config/constants";

export const addSearchAction = (id) => ({
    type: types.ADD_SEARCH,
    payload: {
        id,
        status: SEARCH_STATUS.QUEUED
    }
});