import {types} from "./actionTypes";

export const updateWordAction = (wordId, props) => ({
    type: types.UPDATE_WORD,
    payload: {
        wordId,
        props
    }
});