import {store} from './store';
import {getWordAction} from './actions/getWordAction'
const clc = require('cli-color')


const handleStateChange = () => {
   let state = store.getState();
   console.log(clc.blue(JSON.stringify(state, null, 3)))
}

store.subscribe(handleStateChange);

store.dispatch(getWordAction('hello'));


