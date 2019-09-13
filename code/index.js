import {store} from './store';
import {getWordAction} from './actions/getWordAction'

const maxAPI = __non_webpack_require__("max-api");


var path = require('path');
global.appRoot = path.resolve(process.cwd(), "..");

console.log(global.appRoot);

const handleStateChange = () => {
   let state = store.getState();
   maxAPI.outlet(state)
}
// Bind change in state to function
store.subscribe(handleStateChange);

// Fire hello message
//store.dispatch(getWordAction('hello'));

const handlers = {
   get_word: (word) => {
      store.dispatch(getWordAction(word));
   }
};

/** */
maxAPI.addHandlers(handlers);

