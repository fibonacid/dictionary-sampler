import {types} from "./actionTypes";

export const searchWordsFromWebpageAction = url => ({
    type: types.SEARCH_WORDS_FROM_WEBPAGE,
    payload: url
});