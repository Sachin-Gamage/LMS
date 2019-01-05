import * as actionTypes from "../actions/actionTypes";

export function popup(state = {}, action) {
  switch (action.type) {
    case actionTypes.POPUP_OPEN:
      return {...state,popUpStates:action.popup};

    case actionTypes.POPUP_RESET:
      return {...state,popUpStates:action.popup};
    
    default:
        return state;
  }
}