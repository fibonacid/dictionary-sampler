import {store} from './store';
import {addWordAction} from './actions/fetchWordAction'
import { maxApi } from "./lib/config/maxApi";
import {searchWordAction} from "./actions/searchWordAction";

var path = require('path');
global.appRoot = path.resolve(process.cwd(), "..");

//console.log(global.appRoot);

const handleStateChange = () => {
   let state = store.getState();
   maxApi.outlet(state)
}
// Bind change in state to function
store.subscribe(handleStateChange);

// Fire hello message
//store.dispatch(getWordAction('hello'));

const handlers = {
   fetch_word: (word) => {
      store.dispatch(addWordAction(word));
   },
   search_word: word => {
       store.dispatch(searchWordAction(word));
   }
};

/** */
maxApi.addHandlers(handlers);

