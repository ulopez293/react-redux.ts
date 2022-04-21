import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/reducer';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import expireIn from "redux-persist-transform-expire-in";

const expireMiliSeconds = 1000 * (60 * 60) // 1 hour
const expirationKey = "persistencyExpiration"
const persistConfig = {
    key: 'main-root',
    storage,
    transforms: [expireIn(expireMiliSeconds, expirationKey, [])]
}
const persistedReducer = persistReducer(persistConfig, reducer)

const initialState = {
    load: false,
    login: {
        active: false,
        user: {}
    }
}

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
)
const Persistor = persistStore(store)

export { store, Persistor }
