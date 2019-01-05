import * as actionTypes from "../actions/actionTypes";

export function book(state = {}, action) {
    switch (action.type) {
        case actionTypes.ADD_DVD_SUCESS:
            return { ...state, success: true };

        case actionTypes.ADD_DVD_SUCESS:
            return { ...state, err: true };

        case actionTypes.GET_DVD_SUCESS:
            return { ...state, dvdData: action.dvd }

        case actionTypes.GET_DVD_ERROR:
            return { ...state, dvdDataErr: action.err }

        default:
            return state;
    }
}