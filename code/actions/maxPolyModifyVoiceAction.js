import {types} from "./actionTypes";

export const maxPolyModifyVoiceAction = (voiceId, message) => ({
    type: types.MAX_POLY_MODIFY_VOICE,
    payload: {
        voiceId,
        message
    }
});