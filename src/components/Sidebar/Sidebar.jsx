import React from 'react'
import style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import FriendsContainer from './Friends/FriendsContainer'
import userPhoto from '../../assets/images/profile_img_plug.jpg'

const Sidebar = ({ login, profile }) => {
  return (
    <nav className={style.nav}>
      <button className={style.page_var}>
        <div className={style.page_var_img_wrap}>
            
          {!profile ? (
            <img src={userPhoto} alt='' />
          ) : (
            <img
              src={
                profile.photos.small != null ? profile.photos.small : userPhoto
              }
              alt=''
            />
          )}

          {/* <img src={userPhoto} alt='' /> */}
        </div>
        <p title={`${login}'s`}>
          {login}
          <b>'s</b>
        </p>
        <span>Page ⇅</span>
      </button>
      <ul>
        <li className={`${style.item} ${style.active}`}>
          <NavLink to='/profile' activeClassName={style.active}>
            <span>🧑‍</span>
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/dialogs' activeClassName={style.active}>
            <span>✉️</span>
            Messages
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/users' activeClassName={style.active}>
            <span>🔍</span>
            Users
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/news' activeClassName={style.active}>
            <span>📰</span>
            News
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/music' activeClassName={style.active}>
            <span>🎵</span>
            Music
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/settings' activeClassName={style.active}>
            <span>⚙️</span>
            Settings
          </NavLink>
        </li>
      </ul>
      <FriendsContainer />
    </nav>
  )
}

export default Sidebar
