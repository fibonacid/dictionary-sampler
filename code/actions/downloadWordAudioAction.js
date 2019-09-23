import {types} from "./actionTypes";

export const searchWordAction = (wordId, audiofileUrl) => ({
    type: types.SEARCH_WORD,
    payload: {
        wordId,
        audiofileUrl
    }
});