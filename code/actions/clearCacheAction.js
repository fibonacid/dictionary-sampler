import {types} from "./actionTypes";

export const clearCacheAction = () => ({
    type: types.CLEAR_CACHE
});

export const clearCacheSuccess = () => ({
    type: types.CLEAR_CACHE_ERROR,
});

export const clearCacheError = error => ({
    type: types.CLEAR_CACHE_ERROR,
    error: error
});