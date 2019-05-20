import {types} from './actionTypes'

export function getWordAction(word, filters=[]) {
   return {
      type: types.GET_WORD,
      payload: {word, filters},
   }
}