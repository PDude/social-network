import React from 'react'
import Container from '../../common/Container/Container'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/profile_img_plug.jpg'
import coverPhoto from '../../../assets/images/cover_img.jfif'
import { FaFacebookSquare, FaExternalLinkSquareAlt, FaVk, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaGithubSquare, FaLink } from 'react-icons/fa'
import { ImBookmark } from 'react-icons/im'
import ProfileStatusHooks from './ProfileStatusHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) return <Preloader />

    let backgroundImage
    profile.photos.large != null
        ? backgroundImage = profile.photos.large
        : backgroundImage = coverPhoto

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

    return (
        <div className={style.avatar_info}>
            <div className={style.cover_img} style={{ backgroundImage: `url(${backgroundImage})` }} />
            <Container>
                <div className={style.avatar_jobStatus}>
                    <div className={style.avatar_wrap}>
                        <img src={profile.photos.small != null
                            ? profile.photos.small
                            : userPhoto} alt='' />
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