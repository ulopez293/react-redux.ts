import { SET_LOAD, SET_LOGIN } from "../types/types"

export const loadAction = (load: boolean) => (dispatch: any) => {
    dispatch({
        type: SET_LOAD,
        payload: load
    })
}

export const loginAction = (user: any) => (dispatch: any) => {
    dispatch({
        type: SET_LOGIN,
        payload: user
    })
}