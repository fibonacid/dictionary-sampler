import {store} from './store';
import { maxApi } from "./lib/config/maxApi";
import {searchWordAction} from "./actions/searchWordAction";
import {searchWordsFromTextAction} from "./actions/searchWordsFromTextAction";
import {logStoreAction} from "./actions/logStoreAction";
import {stopAllAction} from "./actions/stopAllAction";
import {clearCacheAction} from "./actions/clearCacheAction";
import {changeDestLangAction, changeSrcLangAction} from "./actions/changeLanguageAction";
import {resetAppAction} from "./actions/resetAppAction";
import {clearStoreAction} from "./actions/clearStoreAction";

var path = require('path');
global.appRoot = path.resolve(process.cwd(), "..");

const handlers = {
   change_src_lang: lang => {
      store.dispatch(changeSrcLangAction(lang));
   },
   change_dest_lang: lang => {
      store.dispatch(changeDestLangAction(lang))
   },
   clear_cache: () => {
      store.dispatch(clearCacheAction());
   },
   clear_store: () => {
      store.dispatch(clearStoreAction());
   },
   log_store: () => {
      store.dispatch(logStoreAction());
   },
   panic: () => {
       store.dispatch(stopAllAction());
   },
   reset_app: () => {
      store.dispatch(resetAppAction());
   },
   search_text: text => {
      store.dispatch(searchWordsFromTextAction(text))
   },
   search_word: word => {
       store.dispatch(searchWordAction(word));
   }
};

/** */
maxApi.addHandlers(handlers);

