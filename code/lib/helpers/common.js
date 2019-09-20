import {OXFORD_API} from "../config/apiConstants";
import _ from 'lodash';

export const selectWord = (state, word) => {
    const { data } = state.words;
    if (!data) {
        return;
    }
    return data[word];
};

export const selectSearch = (state, search_id) => {
    return state.searches[search_id];
};

export const isValidLang = lang => {
  if (typeof lang !== "string") {
    throw new Error("lang must be a string");
  }
  return _.has(OXFORD_API.LANGUAGES, lang);
};