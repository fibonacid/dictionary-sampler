import {types} from "./actionTypes";

export const downloadWordAudioAction = word => ({
    type: types.DOWNLOAD_WORD_AUDIO,
    payload: word
});