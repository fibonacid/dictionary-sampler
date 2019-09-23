import {types} from "./actionTypes";

export const storeSearchInstance = searchId => ({
    type: types.SEARCH_WORD,
    payload: searchId
});