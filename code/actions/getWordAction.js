import {types} from './actionTypes'

export function getWordAction(word) {
   return {
      type: types.GET_WORD,
      payload: word
   }
}