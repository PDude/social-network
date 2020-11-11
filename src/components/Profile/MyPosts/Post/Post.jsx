import React from 'react'
import userPhoto from '../../../../assets/images/profile_img_plug.jpg'
import Preloader from '../../../common/Preloader/Preloader'
import style from './Post.module.css'

const Post = (props) => {

    if (!props.profile) return <Preloader />

    return (
        <div className={style.post_item}>
            <div className={style.img_text_wrap}>
                <div className={style.img_wrap}>
                    <img src={props.profile.photos.small != null
                        ? props.profile.photos.small
                        : userPhoto} alt='' />
                </div>
                <div className={style.post_text_img_wrap}>
                    {props.imgPath != null
                        ? <div className={style.post_img_wrap}>
                            <img src={props.imgPath} alt="" />
                        </div>
                        : null}
                    <p>
                        {props.message}
                    </p>
                </div>
            </div>
            <div className={style.btns_social}>
                <button className={style.like_btn}>
                    👍<sup>{props.likesCount}</sup>
                </button>
                <button className={style.share_btn}>
                    🔗<sup>{props.sharesCount}</sup>
                </button>
            </div>
        </div>
    )
}

export default Post