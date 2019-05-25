import {store} from './store';
import {getWordAction} from './actions/getWordAction'

const handleStateChange = () => {
   let state = store.getState();
}

store.subscribe(handleStateChange);

store.dispatch(getWordAction('hello'));


const max = __non_webpack_require__("max-api");

max.post('hello world')