import {store} from './store';
import {getWordAction} from './actions/getWordAction'
import {OXFORD_API} from './config/apiConstants'

const handleStateChange = () => {
   let state = store.getState();
}

store.subscribe(handleStateChange);

const params = {
   filters: [
      OXFORD_API.FILTERS.PRONUNCIATIONS,
      OXFORD_API.FILTERS.EXAMPLES
   ]
};

store.dispatch(getWordAction('hello', params));


