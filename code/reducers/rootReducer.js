import {combineReducers} from 'redux';
import {wordsReducer} from './wordsReducer'
import {types} from "../actions/actionTypes";
import {queueReducer} from "./queueReducer";
import {baseReducer} from "./baseReducer";

export const rootReducer = (state, action) => {
   if (action.type === types.INITIALIZE_STORE) {
      return {}
   }
   return appReducer(state, action)
};

const appReducer = combineReducers({
   words: wordsReducer,
   queue: queueReducer,
   base: baseReducer
});