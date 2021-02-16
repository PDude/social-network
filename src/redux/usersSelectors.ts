import { AppStateType } from './reduxStore'
import { createSelector } from 'reselect'

const getUsersDataSelector = (state: AppStateType) => {
  return state.usersPage.usersData
}

export const getUsersData = createSelector(getUsersDataSelector, (users) => {
  return users.filter((u) => true)
})

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}

export const getTotalItemsCount = (state: AppStateType) => {
  return state.usersPage.totalItemsCount
}

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}
