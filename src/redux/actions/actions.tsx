import { SET_LOAD } from "./types"

export const loadAction = (load: boolean) => (dispatch: any) => {
    dispatch({
        type: SET_LOAD,
        payload: load
    })
}