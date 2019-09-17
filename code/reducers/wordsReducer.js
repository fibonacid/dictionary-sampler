import {types} from "../actions/actionTypes";
import _ from 'lodash'

export const wordsReducer = (state={}, action) => {
   switch(action.type) {
      case types.ADD_WORD:
         return state;
      case types.ADD_WORD_SUCCESS:
         return digestAddWord(state, action.payload);
      case types.ADD_WORD_ERROR:
         return state;
      case types.UPDATE_WORD:
         return digestUpdateWord(state, action.payload);
      default:
         return state
   }
};

function digestAddWord(prevState, payload) {
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

function digestUpdateWord(prevState, payload) {
   return prevState;
}
