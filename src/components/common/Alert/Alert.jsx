import React from 'react'
import style from './Alert.module.css'

const Alert = (props) => {
    return (
        <article className={style.alert_article}>
            {props.text}
        </article>
    )
}

export default Alert