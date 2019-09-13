import {types} from './actionTypes'

export const cacheWordAudioAction = word => ({
   type: types.CACHE_WORD_AUDIO,
   payload: word
});