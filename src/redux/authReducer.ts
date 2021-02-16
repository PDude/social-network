import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'social_network/auth/SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'social_network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return { 
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

type SetAuthUserDataPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetAuthUserDataType = {
  type: typeof SET_AUTH_USER_DATA
  payload: SetAuthUserDataPayloadType
}

const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth }
})

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl }
})

export const getAuthUserData = () => async (dispatch: any) => {
  let data = await authAPI.me()

  if (data.resultCode === 0) {
    let { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const loginSession = (
  email: string,
  password: string,
  remember_me: boolean,
  captcha: string
) => async (dispatch: any) => {
  let data = await authAPI.login(email, password, remember_me, captcha)

  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }

    let message =
      data.messages.length > 0 ? data.messages[0] : 'Some error occurred'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url

  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logoutSession = () => async (dispatch: any) => {
  let data = await authAPI.logout()

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
