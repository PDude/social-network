import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    postsData: [
        { id: 1, likesCount: 15, sharesCount: 4, message: 'I started to create my own and first social network 💻', imgPath: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
        { id: 2, likesCount: 21, sharesCount: 6, message: 'Hello everyone, today I bought a bass, which I dreamed of buying for a very long time, I am so excited 🎸', imgPath: 'https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
        { id: 3, likesCount: 11, sharesCount: 2, message: 'Thanks guys for your supporting ❤️', imgPath: 'https://images.unsplash.com/photo-1559559404-aa6a607570a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 5, likesCount: 0, sharesCount: 0, message: action.post }]
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}

export const addPost = (post) => ({ type: ADD_POST, post })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status)  => ({ type: SET_STATUS, status })
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}


export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}


export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)

    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file) 
   
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile) 
   
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}

export default profileReducer
