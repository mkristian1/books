import createBook from './createBook';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    createBook,
    firestore : firestoreReducer,
});

export default rootReducer;
