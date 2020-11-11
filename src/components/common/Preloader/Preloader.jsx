import React from 'react'
import preloader from '../../../assets/images/loader.svg'
import style from './preloader.module.css'

const Preloader = () => {

    return (
        <div className={style.preloader}>
            <img src={preloader} alt='loading...'/>
        </div>
    )
}

export default Preloader