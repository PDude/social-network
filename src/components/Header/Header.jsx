import React from 'react'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.additional_info}>
                <button>Some Info 📝</button>
                {props.isAuth
                    ? <div className={style.block_for_signed}><span>{props.login}</span> |<button className={style.logout_btn} onClick={props.logoutSession}>Log Out ❌</button></div>
                    : <div className={style.signin_block}><a href={'https://www.instagram.com/shalldon_/'} target={'_blank'}>About 🔥</a></div>}
            </div>
        </header>
    )
}

export default Header