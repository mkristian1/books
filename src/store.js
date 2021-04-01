
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/firebase-config';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
        
    )
);

export default store;