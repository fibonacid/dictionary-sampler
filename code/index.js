import {store} from './store';
import {getWordAction} from './actions/getWordAction'

const handleStateChange = () => {
   console.log(store.getState())
}

store.subscribe(handleStateChange);

store.dispatch(getWordAction('hello'))

