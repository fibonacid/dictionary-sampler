import {store} from './store';
import {getWordAction} from './actions/getWordAction'

const handleStateChange = () => {

}

store.subscribe(handleStateChange);

store.dispatch(getWordAction('hello'));

setTimeout(() => {
   store.dispatch(getWordAction('goodbye'));
}, 3000);

