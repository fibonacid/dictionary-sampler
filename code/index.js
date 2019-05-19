import {store} from './store';
import {getWordAction} from './actions/getWordAction'

store.dispatch(getWordAction('hello'))