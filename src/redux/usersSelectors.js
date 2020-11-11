import { createSelector } from 'reselect'

const getUsersDataSelector = (state) => {
    return state.usersPage.usersData
}

export const getUsersData = createSelector(getUsersDataSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const gettotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}