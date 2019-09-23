import {types} from "./actionTypes";

export const maxPolyNewVoiceAction = voiceId => ({
    type: types.MAX_POLY_NEW_VOICE,
    payload: voiceId
});