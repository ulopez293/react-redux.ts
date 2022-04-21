import { SET_LOAD, SET_LOGIN } from '../types/types';

const reducer = ( state: any, action: any ) => {
    switch ( action.type ) {
        case SET_LOAD:
            return {
                ...state,
                load: action.payload
            }
        case SET_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}

export default reducer;