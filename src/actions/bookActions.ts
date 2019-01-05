import * as types from "./actionTypes";
import { Book } from '../modals/book';
import libraryManagementService from '../services/libraryManagementService';
import { openPopup } from './popUpActions';

export function addBook(book:Book) {
    return dispatch => {
        return libraryManagementService.addItem('book',null,book)
            .then(book => {
                dispatch({
                    type: types.ADD_BOOK_SUCESS,
                    book
                });
            }).catch(err => {
                dispatch({
                    type: types.ADD_BOOK_FAIL,
                    err
                });
            });
    };
}

export function getBook(isbn:string){
    return dispatch => {
        return libraryManagementService.getBook(isbn)
            .then(book => {
                dispatch({
                    type: types.GET_BOOK_SUCESS,
                    book
                });
            }).catch(err => {
                dispatch({
                    type: types.GET_BOOK_SUCESS,
                    err
                });
            });
    };
}