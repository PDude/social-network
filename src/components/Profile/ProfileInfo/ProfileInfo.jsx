import React from 'react'
import Container from '../../common/Container/Container'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/profile_img_plug.jpg'
import coverPhoto from '../../../assets/images/cover_img.jfif'
import { FaFacebookSquare, FaExternalLinkSquareAlt, FaVk, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaGithubSquare, FaLink } from 'react-icons/fa'
import ProfileStatusHooks from './ProfileStatusHooks'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    if (!profile) return <Preloader />

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) savePhoto(e.target.files[0])
    }

    return (
        <div className={style.avatar_info}>
            {/* <div className={style.cover_img} style={{ backgroundImage: `url(${profile.photos.large || coverPhoto})` }} /> */}
            <div className={style.cover_img} style={{ backgroundImage: `url(${coverPhoto})` }} />
            <Container>
                <section className={style.avatar_jobStatus}>
                    <div className={style.avatar_wrap}>
                        {isOwner && <>
                            <input id={'file_profile_img'} type='file' onChange={onMainPhotoSelected} />
                            <label htmlFor={'file_profile_img'} />
                        </>}
                        <img src={profile.photos.small || userPhoto} alt='' />
                    </div>
                </section>

                <ProfileData profile={profile}>
                    <ProfileStatusHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
                </ProfileData>

            </Container>
        </div>
    )
}

const ProfileData = ({ profile, ...props }) => {
    return (
        <div className={style.profile_desc}>
            <h2>
                {profile.fullName}
            </h2>
            <div className={profile.aboutMe !== null ? style.profile_info_wrap : style.profile_info_wrap_no_about}>
                <div className={style.status_and_job}>
                    {/* Status */}
                    {props.children}
                    {/* Status */}
                    <div className={style.looking_for_job}>
                        <div className={style.job_status}>
                            <b>Looking for a job : </b>
                            <span>{profile.lookingForAJob ? 'yes' : 'no'}</span>
                        </div>
                        {profile.lookingForAJob && <p>{profile.lookingForAJobDescription}</p>}
                    </div>
                </div>
                {profile.aboutMe !== null &&
                    <div className={style.about_me}>
                        <b>About me</b>
                        <p>{profile.aboutMe}</p>
                    </div>}
            </div>
            <div className={style.social_media}>
                <Contacts profile={profile} />
            </div>
        </div>
    )
}

const Contacts = (props) => {
    let contacts = props.profile.contacts

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

    let socialMediaLinks = Object.keys(socialMedia).filter(link => {
        return contacts[link] != null
    }).map(link => {
        return <a key={link} href={contacts[link]} rel='noopener noreferrer' target='_blank'>{socialMedia[link]}</a>
    })

    return (
        <>
            { socialMediaLinks}
        </>
    )
}

export default ProfileInfo

// A ninja or shinobi  was a covert agent or mercenary in feudal Japan. The functions of a ninja included espionage, deception, and surprise attacks.