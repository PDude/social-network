import React from 'react'
import style from './Message.module.css'

const Message = (props) => {
    return (
        <p className={style.message}>
            {props.text}
        </p>
    )
}

export default Message