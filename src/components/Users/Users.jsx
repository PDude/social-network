import React from 'react'
import Container from '../common/Container/Container'
import Paginator from '../common/Paginator/Paginator'
import Preloader from '../common/Preloader/Preloader'
import UserItem from './UserItem/UserItem'
import style from './Users.module.css'

const Users = ({currentPage, onPageChange, totalItemsCount, pageSize, usersData, ...props}) => {

    let usersElements = usersData.map(user => <UserItem
        followingInProgress={props.followingInProgress}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
        id={user.id}
        key={user.id}
        name={user.name}
        status={user.status}
        followed={user.followed}
        smallImg={user.photos.small}
        bigImg={user.photos.big}
    />)

    return (
        <Container>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
            <div className={style.users_wrap}>
                {usersElements}
            </div>
        </Container>
    )
}

export default Users