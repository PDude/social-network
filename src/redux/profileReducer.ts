import { PostType, PhotosType } from './../types/types';
import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { ProfileType } from '../types/types'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  postsData: [
    {
      id: 1,
      likesCount: 15,
      sharesCount: 4,
      message: 'I started to create my own and first social network 💻',
      imgPath:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 2,
      likesCount: 21,
      sharesCount: 6,
      message:
        'Hello everyone, today I bought a bass, which I dreamed of buying for a very long time, I am so excited 🎸',
      imgPath:
        'https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 3,
      likesCount: 11,
      sharesCount: 2,
      message: 'Thanks guys for your supporting ❤️',
      imgPath:
        'https://images.unsplash.com/photo-1559559404-aa6a607570a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    }
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: 5,
            likesCount: 0,
            sharesCount: 0,
            message: action.post
          } as PostType
        ]
      }
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId)
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
        profile: { ...state.profile, photos: action.photos } as ProfileType
      }
    default:
      return state
  }
}

type AddPostType = {
  type: typeof ADD_POST
  post: string
}

export const addPost = (post: string): AddPostType => ({ type: ADD_POST, post })

type DeletePostType = {
  type: typeof DELETE_POST
  postId: number
}

export const deletePost = (postId: number): DeletePostType => ({
  type: DELETE_POST,
  postId
})

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile
})

type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}

const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status
})

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const data = await profileAPI.updateStatus(status)

    if (data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  } catch (error) {
    // do smth
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(file)

  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
  const userId = getState().auth.userId
  const data = await profileAPI.saveProfile(profile)

  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('editProfile', { _error: data.messages[0] }))
    return Promise.reject(data.messages[0])

    // dispatch(stopSubmit('editProfile', {
    //     'contacts': {
    //         'facebook': data.messages[0]
    //     }
    // }))
  }
}

export default profileReducer
