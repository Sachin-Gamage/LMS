import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { throttle } from 'lodash'
import reducer from '../reducers';
import { loadState, saveState } from './localStorage';

export function configureStore() {


    const initialState = loadState();

    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    );

    store.subscribe(throttle(() => saveState({
        popup: store.getState().popup,
        book: store.getState().book,
        libraryItems: store.getState().libraryItems
    })));

    return store;
}