import {store} from './store';
import { maxApi } from "./lib/config/maxApi";
import {searchWordAction} from "./actions/searchWordAction";
import {initializeStoreAction} from "./actions/initializeStoreAction";
import {clearCacheAction} from "./actions/clearCacheAction";
import {logStoreAction} from "./actions/logStoreAction";
import {setMaxSearchesAction} from "./actions/setMaxSearchesAction";

var path = require('path');
global.appRoot = path.resolve(process.cwd(), "..");

const handlers = {
    initialize_store: function() {
        store.dispatch(initializeStoreAction());
    },
    log_store: function() {
        store.dispatch(logStoreAction())
    },
    clear_cache: function() {
        store.dispatch(clearCacheAction())
    },
    reset_app: function() {
        store.dispatch(clearCacheAction());
        store.dispatch(initializeStoreAction());
    },
    search_word: function(word) {
        store.dispatch(searchWordAction(word));
    },
    set_max_searches: function(number) {
        store.dispatch(setMaxSearchesAction(number))
    }
};

/** */
maxApi.addHandlers(handlers);

