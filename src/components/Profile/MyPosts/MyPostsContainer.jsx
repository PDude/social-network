import React from 'react'
import { addPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { compose } from 'redux'

class MyPostsContainer extends React.Component {
    render() {
        return <MyPosts {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    postsData: state.profilePage.postsData,
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, { addPost })
)(MyPostsContainer)