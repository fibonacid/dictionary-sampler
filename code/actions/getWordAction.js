import {types} from './actionTypes'
import {OXFORD_API} from "../config/apiConstants";

const defaultParams = {
   lang: "en-us",
   filters: [
      OXFORD_API.FILTERS.PRONUNCIATIONS,
      OXFORD_API.FILTERS.EXAMPLES
   ]
}

export function getWordAction(word, params={}) {
   return {
      type: types.GET_WORD,
      payload: {
         word,
         params: {...defaultParams, ...params}
      },
   }
}