import {types} from "../actions/actionTypes";
import _ from 'lodash'

export const words = (state=[], action) => {

   switch(action.type) {

      case types.GET_WORD:
         return [
            ...state,
         ]

      case types.GET_WORD_SUCCESS:
         return [
            ...state,
            action.payload
         ]

      case types.GET_WORD_ERROR:
         return [
            ...state,
         ]

      default:
         return state
   }
}