import React, { useState, useEffect } from 'react'
import Container from '../../common/Container/Container'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/profile_img_plug.jpg'
import coverPhoto from '../../../assets/images/cover_img.jfif'
import { FaFacebookSquare, FaExternalLinkSquareAlt, FaVk, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaGithubSquare, FaLink } from 'react-icons/fa'
import { ImBookmark } from 'react-icons/im'
import ProfileStatusHooks from './ProfileStatusHooks'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    if (!profile) return <Preloader />

    let socialMedia = {
        facebook: <FaFacebookSquare />,
        website: <FaExternalLinkSquareAlt />,
        vk: <FaVk />,
        twitter: <FaTwitterSquare />,
        instagram: <FaInstagramSquare />,
        youtube: <FaYoutubeSquare />,
        github: <FaGithubSquare />,
        mainLink: <FaLink />
    }

    let socialMediaLinks = Object.keys(socialMedia).map(link => {
        let contacts = profile.contacts
        return contacts[link] != null
            ? <a key={link} href={contacts[link]} rel='noopener noreferrer' target='_blank'>{socialMedia[link]}</a>
            : null
    })

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) savePhoto(e.target.files[0])
    }

    // !
    // Page doesn't re-render after uploading file (photo)
    // !

    return (
        <div className={style.avatar_info}>
            <div className={style.cover_img} style={{ backgroundImage: `url(${profile.photos.large || coverPhoto})` }} />
            <Container>
                <div className={style.avatar_jobStatus}>
                    <div className={style.avatar_wrap}>
                        {isOwner && <>
                            <input id={'file_profile_img'} type='file' onChange={onMainPhotoSelected} />
                            <label htmlFor={'file_profile_img'} />
                        </>}
                        <img src={profile.photos.small || userPhoto} alt='' />
                    </div>
                    {profile.lookingForAJob
                        ? <span className={style.looking_job} title='I Am Looking For A Job '><ImBookmark /></span>
                        : <span className={style.dont_looking_job} title='I Am Not Looking For A Job '><ImBookmark /></span>
                    }
                </div>
                <div className={style.profile_desc}>
                    <h2>
                        {/* Ashley Bennett */}
                        {profile.fullName}
                    </h2>
                    {/* 20 y. o. | Christian ✝️ & Musician 🎹 */}

                    <ProfileStatusHooks status={status} updateStatus={updateStatus} />

                    <div className={style.social_media}>
                        {socialMediaLinks}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileInfo