import {types} from "./actionTypes";

export const changeLanguageAction = lang => ({
    type: types.CHANGE_LANGUAGE,
    payload: lang
});