import {combineReducers} from 'redux';
import {wordsReducer} from './wordsReducer'
import {cacheReducer} from "./cacheReducer";

export const rootReducer = combineReducers({
   words: wordsReducer,
   cache: cacheReducer
});