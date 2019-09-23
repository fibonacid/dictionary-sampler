import {types} from "./actionTypes";

export const maxPolyKillVoiceAction = voiceId => ({
    type: types.MAX_POLY_KILL_VOICE,
    payload: voiceId
});