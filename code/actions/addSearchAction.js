import {types} from "./actionTypes";
import {SEARCH_STATUS} from "../lib/config/constants";

export const addSearchAction = (query) => ({
    type: types.ADD_SEARCH,
    payload: query
});