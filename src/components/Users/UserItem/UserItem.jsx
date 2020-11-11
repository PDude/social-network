import React from 'react'
import style from './UserItem.module.css'
import userPhoto from '../../../assets/images/profile_img_plug.jpg'
import coverPhoto from '../../../assets/images/cover_img.jfif'
import { NavLink } from 'react-router-dom'
import Preloader from '../../common/Preloader/Preloader'

const UserItem = ({id, smallImg, bigImg, status, followingInProgress, ...props}) => {

    let statusPlug = `I'm Social Network Part`

    return (
        <NavLink to={`/profile/${id}`} className={style.user_item} >
            <div className={style.cover_img_wrap}>
                <img src={bigImg != null ? bigImg : coverPhoto} alt="" />
            </div>
            <div className={style.profile_img_wrap}>
                <img src={smallImg != null ? smallImg : userPhoto} alt="" />
            </div>
            <div className={style.user_info}>
                <h3 className={style.name}>
                    {props.name}
                </h3>
                <p className={style.status}>
                    {status != null ? status : statusPlug}
                </p>
                <p className={style.location}>
                    {/* <span className={style.country}>{props.country}</span>, <span className={style.city}>{props.city}</span> */}
                    <span className={style.country}>Skyrim</span>, <span className={style.city}>Solitude</span>
                </p>
            </div>
            {props.followed
                ? <button disabled={followingInProgress.some(userId => userId === id)} onClick={(e) => {
                    e.preventDefault()
                    props.unfollowUser(id)
                }} className={`${style.subscriptionBtn} ${style.followed}`}>Unfollow ✔</button>
                : <button disabled={followingInProgress.some(userId => userId === id)} onClick={(e) => {
                    e.preventDefault()
                    props.followUser(id)
                }} className={style.subscriptionBtn}>Follow</button>
            }
            {followingInProgress.some(userId => userId === id) ? <Preloader /> : null}
        </NavLink >
    )
}

export default UserItem