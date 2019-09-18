import {types} from "../actions/actionTypes";
import _ from "lodash";

export const cacheReducer = (state={}, action) => {
   switch(action.type) {
      case types.CACHE_WORD_AUDIO:
         return state;
      case types.CACHE_WORD_AUDIO_SUCCESS:
         return digestDownloadWord(state, action.payload);
      case types.CACHE_WORD_AUDIO_ERROR:
         return state;
      default:
         return state
   }
};

function digestDownloadWord(prevState, payload) {
   const nextState = {
      index: []
   };
   nextState.index.push(payload);
   const index = _.union([], prevState.index, nextState.index);
   return { index }
}