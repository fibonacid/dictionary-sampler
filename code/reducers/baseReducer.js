import {types} from "../actions/actionTypes";

const initialState = {
    searchCount: 0
};

export const baseReducer = (state=initialState, action) => {
  switch(action.type) {
      case types.INCREASE_SEARCH_COUNT:
          return {
              ...state,
              searchCount: state.searchCount + 1
          };
      case types.RESET_SEARCH_COUNT:
          return {
              ...state,
              searchCount: 0
          };
      default:
          return state;
  }
};