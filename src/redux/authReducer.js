import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_AUTH_USER_DATA = 'social_network/auth/SET_AUTH_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth }
})

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()

    if (data.resultCode === 0) {
        let { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const loginSession = (email, password, remember_me) => async (dispatch) => {
    let data = await authAPI.login(email, password, remember_me)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error occurred'
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logoutSession = () => async (dispatch) => {
    let data = await authAPI.logout()
   
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer     