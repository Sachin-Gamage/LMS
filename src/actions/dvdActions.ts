import * as types from "./actionTypes";
import libraryManagementService from '../services/libraryManagementService';
import { DVD } from '../modals/dvd';


export function addDvd(dvd: DVD) {
    return dispatch => {
        return libraryManagementService
          .addItem("dvd", dvd, null)
          .then(book => {
            dispatch({ type: types.ADD_DVD_SUCESS, book });
          })
          .catch(err => {
            dispatch({ type: types.ADD_DVD_FAIL, err });
          });
    };
}

export function getDVD(isbn: string) {
    return dispatch => {
        return libraryManagementService.getDvd(isbn)
            .then(book => {
                dispatch({
                    type: types.GET_DVD_SUCESS,
                    book
                });
            }).catch(err => {
                dispatch({
                    type: types.GET_DVD_ERROR,
                    err
                });
            });
    };
}