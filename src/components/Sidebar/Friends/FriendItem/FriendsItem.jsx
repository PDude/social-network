import React from 'react'
import style from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={style.friend_item}>
            <div className={style.img_friend_wrap}>
                <img src={props.imgPath} alt="" />
            </div>
            <p>
                {props.name}
            </p>
        </div>
    )
}

export default FriendItem