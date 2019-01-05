import { combineReducers } from 'redux';
import {popup} from './popUpReducer';
import {book} from './bookReducer';
import {libraryItems} from './libraryReducer';


export default combineReducers({
    popup,
    book,
    libraryItems
});