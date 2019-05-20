import {store} from './store';
import {getWordAction} from './actions/getWordAction'
import oxford from './helpers/apiConstants'

const handleStateChange = () => {
   let state = store.getState();
}

store.subscribe(handleStateChange);

let filters = [oxford.filters.pronunciations, oxford.filters.examples];

store.dispatch(getWordAction('hello', filters));


