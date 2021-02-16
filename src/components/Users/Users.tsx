import React, { FC } from 'react'
import { UserType } from '../../types/types'
import Container from '../common/Container/Container'
import Paginator from '../common/Paginator/Paginator'
import UserItem from './UserItem/UserItem'
import style from './Users.module.css'

type PropsType = {
  currentPage: number
  onPageChange: (pageNum: number) => void
  totalItemsCount: number
  pageSize: number
  usersData: Array<UserType>
  followingInProgress: Array<number>
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
}

const Users: FC<PropsType> = ({
  currentPage,
  onPageChange,
  totalItemsCount,
  pageSize,
  usersData,
  ...props
}) => {
  let usersElements = usersData.map((user) => (
    <UserItem
      followingInProgress={props.followingInProgress}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
      id={user.id}
      key={user.id}
      name={user.name}
      status={user.status}
      followed={user.followed}
      photos={user.photos}
    />
  ))

  return (
    <Container>
      <Paginator
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <div className={style.users_wrap}>{usersElements}</div>
    </Container>
  )
}

export default Users
