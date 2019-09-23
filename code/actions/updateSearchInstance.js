import {types} from "./actionTypes";

export const updateSearchInstance = (search_id, props) => ({
    type: types.SEARCH_WORD,
    payload: {
        search_id,
        props
    }
});