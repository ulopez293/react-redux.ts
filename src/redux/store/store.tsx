import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/reducer';

const initialState = {
    load: false,
    login: {
        active: false,
        user: {}
    }
}

export const store = createStore (
    reducer, 
    initialState, 
    composeWithDevTools()
);