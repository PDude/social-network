import { usersAPI } from "../api/api"
import { updateObjsInArray } from "../utils/objectsHelpers"

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    usersData: [],
    pageSize: 6,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersData: updateObjsInArray(state.usersData, action.userId, 'id', { followed: true })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                usersData: updateObjsInArray(state.usersData, action.userId, 'id', { followed: false })
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
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

const followSuccess = (userId) => ({ type: FOLLOW_USER, userId })
const unfollowSuccess = (userId) => ({ type: UNFOLLOW_USER, userId })
const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
const settotalItemsCount = (totalItemsCount) => ({ type: SET_TOTAL_USERS_COUNT, totalItemsCount })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(setUsers(data.items))
    dispatch(settotalItemsCount(data.totalCount))
    dispatch(toggleIsFetching(false))
}

const subscriptionUser = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId))

    let data = await apiMethod(userId)
    if (data.resultCode == 0) dispatch(actionCreator(userId))

    dispatch(toggleIsFollowingProgress(false, userId))
}

export const followUser = (userId) => async (dispatch) => {
    subscriptionUser(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
}

export const unfollowUser = (userId) => async (dispatch) => {
    subscriptionUser(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}

export default usersReducer

