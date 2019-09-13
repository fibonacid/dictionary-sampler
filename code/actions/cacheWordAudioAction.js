import {types} from './actionTypes'

export const cacheWordAudioAction = word_id => ({
   type: types.CACHE_WORD_AUDIO,
   payload: { word_id }
});