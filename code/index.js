import {store} from './store';
import { maxApi } from "./lib/config/maxApi";
import {searchWordAction} from "./actions/searchWordAction";

var path = require('path');
global.appRoot = path.resolve(process.cwd(), "..");

const handlers = {
    search_word: word => {
        store.dispatch(searchWordAction(word))
    }
};

/** */
maxApi.addHandlers(handlers);

