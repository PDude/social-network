import React from 'react'
import style from './MainWrapState.module.css'

const MainWrapState = (props) => {
    return (
        <div className={props.isAuth ? style.main_wrap : `${style.main_wrap} ${style.main_wrap_logout}`}>
            {props.children}
        </div>
    )
}

export default MainWrapState