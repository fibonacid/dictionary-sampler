import {types} from "./actionTypes";

export const searchWordsFromTextAction = text => ({
    type: types.SEARCH_WORDS_FROM_TEXT,
    payload: text
})