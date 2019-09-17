import {types} from './actionTypes'
import {OXFORD_API} from "../lib/config/apiConstants";

const defaultParams = {
   lang: "en-us",
   filters: [
      OXFORD_API.FILTERS.PRONUNCIATIONS,
      OXFORD_API.FILTERS.EXAMPLES
   ]
};

export function addWordAction(word, params={}) {
   return {
      type: types.ADD_WORD,
      payload: {
         word,
         params: {...defaultParams, ...params}
      },
   }
};