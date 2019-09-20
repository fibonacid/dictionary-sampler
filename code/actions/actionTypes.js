import _ from 'lodash'

export const types = {
   SEARCH_WORDS_FROM_TEXT: "SEARCH_WORDS_FROM_TEXT",
   SEARCH_WORD: "SEARCH_WORD",
   SEARCH_WORD_FOUND: "SEARCH_WORD_FOUND",
   SEARCH_WORD_NOT_FOUND: "SEARCH_WORD_NOT_FOUND",
   SEARCH_WORD_ERROR: "SEARCH_WORD_ERROR",
   ADD_WORD: "ADD_WORD",
   ADD_WORD_SUCCESS: "ADD_WORD_SUCCESS",
   ADD_WORD_ERROR: "ADD_WORD_ERROR",
   UPDATE_WORD: "UPDATE_WORD",
   DESTROY_WORD: "DESTROY_WORD", // todo
   CACHE_WORD_AUDIO: "CACHE_WORD_AUDIO",
   CACHE_WORD_AUDIO_SUCCESS: "CACHE_WORD_AUDIO_SUCCESS",
   CACHE_WORD_AUDIO_ERROR: "CACHE_WORD_AUDIO_ERROR",
   MAX_OBJECT_OUTPUT: "MAX_OBJECT_OUTPUT",
   MAX_CONSOLE_PRINT: "MAX_CONSOLE_PRINT",
   CHANGE_SRC_LANG: "CHANGE_SRC_LANGUAGE",
   CHANGE_SRC_LANG_SUCCESS: "CHANGE_SRC_LANG_SUCCESS",
   CHANGE_SRC_LANG_ERROR: "CHANGE_SRC_LANG_ERROR",
   CHANGE_DEST_LANG: "CHANGE_DEST_LANG",
   CHANGE_DEST_LANG_SUCCESS: "CHANGE_DEST_LANGUAGE_SUCCESS",
   CHANGE_DEST_LANG_ERROR: "CHANGE_DEST_LANGUAGE_ERROR",
   CLEAR_CACHE: "CLEAR_CACHE",
   CLEAR_STORE: "CLEAR_STORE",
   LOG_STORE: "LOG_STORE",
   STOP_ALL: "STOP_ALL", // todo
   RESET_APP: "RESET_APP" // todo
};

export const successTypes = () => {
   return _.pick(types, [
      "ADD_WORD_SUCCESS",
      "CACHE_WORD_AUDIO_SUCCESS",
      "CHANGE_SRC_LANG_SUCCESS",
      "CHANGE_DEST_LANG_SUCCESS"
   ]);
};

export const errorTypes = () => {
   return _.pick(types, [
      "SEARCH_WORD_ERROR",
      "ADD_WORD_ERROR",
      "CACHE_WORD_AUDIO_ERROR",
      "CHANGE_SRC_LANG_ERROR",
      "CHANGE_SRC_DEST_ERROR"
   ]);
};