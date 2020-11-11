import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        // <NavLink to='/dialogs/1' className={`${style.dialog} ${style.dialog_active}`}>
        <NavLink to={`/dialogs/${props.id}`} className={style.dialog}>
            <div className={style.img_dialog_wrap}>
                <img src={props.imgPath} alt="ava" />
            </div>
            <p>
                {props.name}
            </p>
        </NavLink>
    )
}

export default DialogItem