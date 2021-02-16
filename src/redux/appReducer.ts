import { type } from 'os'
import { getAuthUserData } from './authReducer'

const INITIALIZATION_SUCCESSFUL = 'INITIALIZATION_SUCCESSFUL'

export type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
}

const appReducer = (
  state: InitialStateType = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case INITIALIZATION_SUCCESSFUL:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

type InitializationSuccessfulActionType = {
  type: typeof INITIALIZATION_SUCCESSFUL // 'INITIALIZATION_SUCCESSFUL'
}

const initializationSuccessful = (): InitializationSuccessfulActionType => ({
  type: INITIALIZATION_SUCCESSFUL
})

export const settingInitialization = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())

  Promise.all([promise]).then(() => {
    dispatch(initializationSuccessful())
  })
}

export default appReducer
