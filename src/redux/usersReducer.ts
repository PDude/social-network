import { UserType } from './../types/types'
import { usersAPI } from '../api/api'
import { updateObjsInArray } from '../utils/objectsHelpers'

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  usersData: [] as Array<UserType>,
  pageSize: 6 as number,
  totalItemsCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false,
  followingInProgress: [] as Array<number> // users ids array
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        usersData: updateObjsInArray(state.usersData, action.userId, 'id', {
          followed: true
        })
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        usersData: updateObjsInArray(state.usersData, action.userId, 'id', {
          followed: false
        })
      }
    case SET_USERS:
      return {
        ...state,
        usersData: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalItemsCount: action.totalItemsCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId)
      }
    default:
      return state
  }
}

type FollowSuccessType = {
  type: typeof FOLLOW_USER
  userId: number
}

const followSuccess = (userId: number): FollowSuccessType => ({
  type: FOLLOW_USER,
  userId
})

type UnfollowSuccessType = {
  type: typeof UNFOLLOW_USER
  userId: number
}

const unfollowSuccess = (userId: number): UnfollowSuccessType => ({
  type: UNFOLLOW_USER,
  userId
})

type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

const setUsers = (users: Array<UserType>): SetUsersType => ({
  type: SET_USERS,
  users
})

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

type SetTotalItemsCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalItemsCount: number
}

const setTotalItemsCount = (
  totalItemsCount: number
): SetTotalItemsCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalItemsCount
})

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

type ToggleIsFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export const toggleIsFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleIsFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export const requestUsers = (page: number, pageSize: number) => async (
  dispatch: any
) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))

  let data = await usersAPI.getUsers(page, pageSize)
  dispatch(setUsers(data.items))
  dispatch(setTotalItemsCount(data.totalCount))
  dispatch(toggleIsFetching(false))
}

const subscriptionUser = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleIsFollowingProgress(true, userId))

  let data = await apiMethod(userId)
  if (data.resultCode === 0) dispatch(actionCreator(userId))

  dispatch(toggleIsFollowingProgress(false, userId))
}

export const followUser = (userId: number) => async (dispatch: any) => {
  subscriptionUser(
    dispatch,
    userId,
    usersAPI.followUser.bind(usersAPI),
    followSuccess
  )
}

export const unfollowUser = (userId: number) => async (dispatch: any) => {
  subscriptionUser(
    dispatch,
    userId,
    usersAPI.unfollowUser.bind(usersAPI),
    unfollowSuccess
  )
}

export default usersReducer
