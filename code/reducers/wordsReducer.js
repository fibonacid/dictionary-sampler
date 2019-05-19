import {types} from "../actions/actionTypes";

export const words = (state={}, action) => {

   switch(action.type) {

      case types.GET_WORD:
         console.log(types.GET_WORD)
         return {
            ...state,
         }

      case types.GET_WORD_SUCCESS:
         console.log(types.GET_WORD_SUCCESS)
         return {
            ...state,
            payload: action.payload,
            success: action.success
         }

      case types.GET_WORD_ERROR:
         console.log(types.GET_WORD_ERROR)
         return {
            ...state,
            payload: action.payload,
            error: action.error
         }

      default:
         return state
   }
}