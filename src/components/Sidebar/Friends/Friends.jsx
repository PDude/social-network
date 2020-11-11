import React from 'react'
import FriendItem from './FriendItem/FriendsItem'
import style from './Friends.module.css'

const Friends = (props) => {

    let friendsElements = props.friendsData.map(friend => <FriendItem id={friend.id} key={friend.id} name={friend.name} imgPath={friend.imgPath} />)

    return (
        <div className={style.friends_content}>
            <hr />
            <h3>
                Friends
            </h3>
            {friendsElements}
        </div>
    )
}

export default Friends