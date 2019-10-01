import {types} from "../actions/actionTypes";
import {clamp} from "../lib/helpers/common";

const initialState = {
    searchCount: 0,
    maxSearches: 64
};

export const baseReducer = (state=initialState, action) => {
  switch(action.type) {
      case types.DECREASE_SEARCH_COUNT:
          return digestDecreaseSearchCount(state);
      case types.INCREASE_SEARCH_COUNT:
          return digestIncreaseSearchCount(state);
      case types.RESET_SEARCH_COUNT:
          return { ...state, searchCount: 0 };
      case types.SET_MAX_SEARCHES:
          return digestMaxSearches(state, action)
      default:
          return state;
  }
};

function digestDecreaseSearchCount(state) {
    const { searchCount } = state;
    let count = searchCount-1 >= 0 ? searchCount-1 : 1;
    return { ...state, searchCount: count }
}

function digestIncreaseSearchCount(state) {
    const { searchCount, maxSearches } = state;
    let count = searchCount+1 < maxSearches ? searchCount+1 : 1;
    return { ...state, searchCount: count }
}

function digestMaxSearches(state, action) {
    if (typeof action.payload === "number") {
        const max = clamp(action.payload, 4, 256);
        return {...state, maxSearches: max };
    } else {
        return state;
    }
}