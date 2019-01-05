import * as types from "./actionTypes";
import { Book } from '../modals/book';
import libraryManagementService from '../services/libraryManagementService';

export function getAllItems() {
    debugger
    return dispatch => {
        return libraryManagementService.getAllItems()
            .then(libraryItems => {
                dispatch({
                    type: types.GET_ALL_ITEMS_SUCCESS,
                    libraryItems
                });
            }).catch(err => {
                dispatch({
                    type: types.GET_ALL_ITEMS_FAILIURE,
                    err
                });
            });
    };
}