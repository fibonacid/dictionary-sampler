import _ from 'lodash'

export const types = {
   DOWNLOAD_WORD_AUDIO: "DOWNLOAD_WORD_AUDIO",
   FETCH_WORD: "FETCH_WORD",
   FETCH_WORD_SUCCESS: "FETCH_WORD_SUCCESS",
   FETCH_WORD_ERROR: "FETCH_WORD_ERROR",
   MAX_POLY_NEW_VOICE: "MAX_POLY_NEW_VOICE",
   MAX_POLY_MODIFY_VOICE: "MAX_POLY_MODIFY_VOICE",
   MAX_POLY_KILL_VOICE: "MAX_POLY_KILL_VOICE",
   STORE_SEARCH_INSTANCE: "STORE_SEARCH_INSTANCE",
   SEARCH_WORD: "SEARCH_WORD",
   STORE_WORD: "STORE_WORD",
   UPDATE_SEARCH_INSTANCE: "UPDATE_SEARCH_INSTANCE",
   UPDATE_WORD: "UPDATE_WORD"
};

export const successTypes = () => {
   return _.pick(types, [

   ]);
};

export const errorTypes = () => {
   return _.pick(types, [

   ]);
};