import {types} from "../actions/actionTypes";
import _ from 'lodash'

export const wordsReducer = (state={}, action) => {

   switch(action.type) {
      case types.FETCH_WORD:
         return state;
      case types.FETCH_WORD_SUCCESS:
         return digestGetWord(state, action.payload);
      case types.FETCH_WORD_ERROR:
         return state;
      default:
         return state
   }
};

function digestGetWord (prevState, payload) {
   const nextState = {
      data: {},
      index: []
   };

   if (payload && payload.id) {
      nextState.data[`${payload.id}`] = payload;
      nextState.index.push(`${payload.id}`);
   }

   const data = _.merge({}, prevState.data, nextState.data);
   const index = _.union([], prevState.index, nextState.index);

   return { index, data }
}
