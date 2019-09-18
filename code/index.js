import {store} from './store';
import {addWordAction} from './actions/addWordAction'
import { maxApi } from "./lib/config/maxApi";
import {searchWordAction} from "./actions/searchWordAction";
import {searchWordsFromTextAction} from "./actions/searchWordsFromTextAction";

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
   get_state: () => {
      const state = store.getState();
      maxApi.post(JSON.stringify(state));
   }
};

/** */
maxApi.addHandlers(handlers);

