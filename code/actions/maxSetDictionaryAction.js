import {types} from "./actionTypes";

export const maxSetDictionaryAction = (dictName, data) => ({
    type: types.MAX_SET_DICTIONARY,
    payload: data
});