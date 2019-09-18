import {store} from './store';
import {addWordAction} from './actions/addWordAction'
import { maxApi } from "./lib/config/maxApi";
import {searchWordAction} from "./actions/searchWordAction";
import {searchWordsFromTextAction} from "./actions/searchWordsFromTextAction";
import {logStoreAction} from "./actions/logStoreAction";
import {stopAllAction} from "./actions/stopAllAction";
import {clearCacheAction} from "./actions/clearCacheAction";

var path = require('path');
global.appRoot = path.resolve(process.cwd(), "..");

//console.log(global.appRoot);

const handleStateChange = () => {
   let state = store.getState();
   //maxApi.outlet(state)
};
// Bind change in state to function
store.subscribe(handleStateChange);

// Fire hello message
//store.dispatch(getWordAction('hello'));

const handlers = {
   search_text: text => {
      store.dispatch(searchWordsFromTextAction(text))
   },
   search_word: word => {
       store.dispatch(searchWordAction(word));
   },
   log_store: () => {
      store.dispatch(logStoreAction());
   },
   clear_cache: () => {
      store.dispatch(clearCacheAction());
   },
   panic: () => {
       store.dispatch(stopAllAction());
   }
};

/** */
maxApi.addHandlers(handlers);

