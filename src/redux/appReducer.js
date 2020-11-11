import { getAuthUserData } from './authReducer'

const INITIALIZATION_SUCCESSFUL = 'INITIALIZATION_SUCCESSFUL'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
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

const initializationSuccessful = () => ({ type: INITIALIZATION_SUCCESSFUL })

export const settingInitialization = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    
    Promise.all([promise])
        .then(() => {
            dispatch(initializationSuccessful())
        })
}

export default appReducer     