import {combineReducers} from 'redux';
import {wordsReducer} from './wordsReducer'
import {cacheReducer} from "./cacheReducer";
import {baseReducer} from "./baseReducer";

export const rootReducer = combineReducers({
   words: wordsReducer,
   cache: cacheReducer,
   base: baseReducer
});