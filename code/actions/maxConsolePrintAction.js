import {types} from "./actionTypes";
import {maxApi} from "../lib/config/maxApi";

export const maxConsolePrintAction = (message, level) => ({
    type: types.MAX_CONSOLE_PRINT,
    payload: { message, level }
});
