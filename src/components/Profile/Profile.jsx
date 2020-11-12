import React from 'react'
import Container from '../common/Container/Container'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <Container>
                <MyPostsContainer />
            </Container>
        </>
    )
}

export default Profile