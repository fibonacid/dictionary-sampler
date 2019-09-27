import {types} from "./actionTypes";

export const downloadWordAudioAction = word => ({
    type: types.DOWNLOAD_WORD_AUDIO,
    payload: word
});

export const downloadWordAudioSuccessAction = filename => ({
    type: types.DOWNLOAD_WORD_AUDIO_SUCCESS
});

export const downloadWordAudioErrorAction = error => ({
    type: types.DOWNLOAD_WORD_AUDIO_SUCCESS,
    error
});