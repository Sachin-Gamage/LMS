import * as actionTypes from "../actions/actionTypes";

export function book(state = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_BOOK_SUCESS:
      return {...state,success:true};

    case actionTypes.ADD_BOOK_SUCESS:
      return {...state,err:true};

    case actionTypes.GET_BOOK_SUCESS:
      return {...state,bookData:action.book}
    
    case actionTypes.GET_BOOK_FAIL:
      return {...state,bookDataErr:action.err}
    
    default:
        return state;
  }
}