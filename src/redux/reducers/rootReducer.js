import reducer from './reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    reducer,
    firestore : firestoreReducer,
});

export default rootReducer;
