import {types} from "./actionTypes";

export const changeSrcLangAction = lang => ({
    type: types.CHANGE_SRC_LANG,
    payload: lang
});

export const changeDestLangAction = lang => ({
    type: types.CHANGE_DEST_LANG,
    payload: lang
});