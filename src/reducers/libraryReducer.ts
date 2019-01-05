import * as actionTypes from "../actions/actionTypes";

export function libraryItems(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_ITEMS_SUCCESS:
      return {...state,items:action.libraryItems};

    case actionTypes.GET_ALL_ITEMS_FAILIURE:
      return {...state,err:action.err};
    
    default:
        return state;
  }
}