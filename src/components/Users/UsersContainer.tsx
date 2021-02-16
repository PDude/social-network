import React from 'react'
import { connect } from 'react-redux'
import {
  requestUsers,
  followUser,
  unfollowUser
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuth/withAuthRedirect'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalItemsCount,
  getUsersData
} from '../../redux/usersSelectors'
import { UserType } from '../../types/types'
import { AppStateType } from '../../redux/reduxStore'

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalItemsCount: number
  usersData: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  followUser: (userId: number) => void
  unfollowUser: (userId: number ) => void
  requestUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount = () => {
    let { currentPage, pageSize } = this.props
    this.props.requestUsers(currentPage, pageSize)
    console.log()
  }

  onPageChange = (pageNum: number) => {
    let { pageSize } = this.props
    this.props.requestUsers(pageNum, pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          usersData={this.props.usersData}
          onPageChange={this.onPageChange}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  usersData: getUsersData(state),
  pageSize: getPageSize(state),
  totalItemsCount: getTotalItemsCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
})

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      requestUsers,
      followUser,
      unfollowUser
    }
  ),
  withAuthRedirect
)(UsersContainer)
