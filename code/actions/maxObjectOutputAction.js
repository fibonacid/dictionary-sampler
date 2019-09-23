import {types} from "./actionTypes";

export const maxObjectOutputAction = payload => ({
   type: types.MAX_OBJECT_OUTPUT,
   payload
});

export const maxObjectPolyMessage = (polyMethod, voiceIndex, status, value) => ({
   type: types.MAX_OBJECT_OUTPUT,
   payload: `${polyMethod} ${voiceIndex} ${status} ${value ? value : ""}`
});