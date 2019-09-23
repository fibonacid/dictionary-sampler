import {combineReducers} from 'redux';
import {wordsReducer} from './wordsReducer'
import {types} from "../actions/actionTypes";

export const rootReducer = (state, action) => {
   if (action.type === types.CLEAR_STORE) {
      return {}
   }
   return appReducer(state, action)
};

const appReducer = combineReducers({
   words: wordsReducer,
   //cache: cacheReducer,
   //base: baseReducer,
   //searches: searchesReducer
});