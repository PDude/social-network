import React from 'react'
import { connect } from 'react-redux'
import {
    setCurrentPage,
    requestUsers,
    followUser,
    unfollowUser
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuth/withAuthRedirect'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItemsCount, getUsersData } from '../../redux/usersSelectors'

class UsersContainer extends React.Component {

    componentDidMount = () => {
        let { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChange = (pageNum) => {
        let { pageSize } = this.props
        this.props.requestUsers(pageNum, pageSize)
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null}
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

let mapStateToProps = (state) => ({
    usersData: getUsersData(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
})

export default compose(
    connect(mapStateToProps, { setCurrentPage, requestUsers, followUser, unfollowUser }),
    withAuthRedirect
)(UsersContainer)
