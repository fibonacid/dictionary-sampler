import {combineReducers} from 'redux';
import {wordsReducer} from './wordsReducer'
import {cacheReducer} from "./cacheReducer";
import {baseReducer} from "./baseReducer";
import {types} from "../actions/actionTypes";

export const rootReducer = (state, action) => {
   if (action.type === types.CLEAR_STORE) {
      state = {}
   }
   return appReducer(state, action)
};

const appReducer = combineReducers({
   words: wordsReducer,
   cache: cacheReducer,
   base: baseReducer
});