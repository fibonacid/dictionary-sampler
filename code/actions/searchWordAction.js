import {types} from './actionTypes'

export function searchWordAction(word) {
    return {
        type: types.SEARCH_WORD,
        payload: word
    }
};