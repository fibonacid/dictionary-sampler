import {store} from './store';
import {fetchWordAction} from './actions/fetchWordAction'
import { maxApi } from "./lib/config/maxApi";

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
      store.dispatch(fetchWordAction(word));
   }
};

/** */
maxApi.addHandlers(handlers);

