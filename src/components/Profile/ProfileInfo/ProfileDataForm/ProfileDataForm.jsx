import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredFiled } from '../../../../utils/validators/validators'
import { Input, Textarea } from '../../../common/FormElements/FormElements'
import style from './ProfileDataForm.module.css'
import Alert from '../../../common/Alert/Alert'

const maxLength30 = maxLengthCreator(30)
const maxLength300 = maxLengthCreator(300)

const ProfileDataForm = ({ handleSubmit, error, profile }) => {

    const [checked, setChecked] = useState(profile.lookingForAJob)

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <form className={style.profile_data_form} onSubmit={handleSubmit}>
            <div className={style.full_name_and_save}>
                <div className={style.full_name_block}>
                    <b>Full Name</b>
                    <Field title={error ? error : undefined} className={style.full_name_input} name={'fullName'} type={'text'} placeholder='Enter your name' component={Input} validate={[requiredFiled, maxLength30]} />
                </div>
                <button className={style.save_btn}>save</button>
                {error && <Alert text={error} />}
            </div>
            <div className={style.looking_job_block}>
                <Field name={'lookingForAJob'} checked={checked} onChange={handleChange} component={Input} id={'looking_job'} type={'checkbox'} />
                <label htmlFor={'looking_job'}>Looking for a job</label>
            </div>
            <div className={style.job_and_about}>
                <div className={style.job_description}>
                    <b>My Professional Skills</b>
                    {checked
                        ? <Field title={error ? error : undefined} name={'lookingForAJobDescription'} type={'text'} placeholder='Write your professional skills' component={Textarea} validate={[requiredFiled, maxLength300]} />
                        : <Field title={error ? error : undefined} name={'lookingForAJobDescription'} type={'text'} placeholder='Write your professional skills' component={Textarea} />}
                </div>
                <div className={style.about_me}>
                    <b>About Me</b>
                    <Field title={error ? error : undefined} name={'aboutMe'} type={'text'} placeholder='Write About You' component={Textarea} validate={[requiredFiled, maxLength300]} />
                </div>
            </div>
            <div className={style.contacts_fields}>
                <b>Contacts</b>
                <div className={style.contacts_fileds_table}>
                    {Object.keys(profile.contacts).map(key => {
                        return <Field title={error ? error : undefined} key={key} name={`contacts.${key}`} type={'text'} placeholder={`Enter your ${key} link`} component={Input} />
                    })}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm