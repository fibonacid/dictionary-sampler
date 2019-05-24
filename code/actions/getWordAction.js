import {types} from './actionTypes'

const defaultParams = {
   lang: "en-us"
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