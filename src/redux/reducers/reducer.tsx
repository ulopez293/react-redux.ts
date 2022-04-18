import { SET_LOAD } from '../actions/types';

const reducer = ( state: any, action: any ) => {
    switch ( action.type ) {
        case SET_LOAD:
            return {
                ...state,
                load: action.payload
            }
        default:
            return state
    }
}

export default reducer;