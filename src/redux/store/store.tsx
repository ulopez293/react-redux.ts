import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/reducer';

const initialState = {
    load: false
}

export const store = createStore (
    reducer, 
    initialState, 
    composeWithDevTools()
);