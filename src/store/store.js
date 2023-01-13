import {createStore,applyMiddleware} from 'redux';
import logger from "redux-logger";
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';

import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

const middlewares = [reduxThunk];

if(process.env.NODE_ENV ==='development'){
    middlewares.push(logger)
}

//persist store
const persistConfig ={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = createStore(persistedReducer,applyMiddleware(...middlewares));
export const persistor = persistStore(store)

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

