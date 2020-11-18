import React from 'react'
import style from './Login.module.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Field } from 'redux-form'
import { Input } from '../common/FormElements/FormElements'
import { maxLengthCreator, requiredFiled } from '../../utils/validators/validators'
import Alert from '../common/Alert/Alert'
import styleFormEl from '../common/FormElements/FormElements.module.css'

const maxLength30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <>
            <form onSubmit={handleSubmit} className={!error ? style.login_form : `${style.login_form} ${styleFormEl.form_total_error}`}>
                <h3>
                    Welcome
                </h3>
                <b className={style.icon_wrap}>
                    👋
                </b>
                <div className={style.form_input}>
                    <Field title={error ? error : undefined} name={'email'} className={style.email_input} type={'email'} placeholder='Enter Your Email' component={Input} validate={[requiredFiled, maxLength30]} />
                </div>
                <div className={style.form_input}>
                    <Field title={error ? error : undefined} name={'password'} className={style.pass_input} type={'password'} placeholder='Enter Your Password' component={Input} validate={[requiredFiled, maxLength30]} />
                </div>  
                <div className={style.remember_me_wrap}>
                    <div className={style.remember_me}>
                        <Field name={'remember_me'} component={Input} id={'remember_me'} type={'checkbox'} />
                        <label htmlFor={'remember_me'}>Remember Me</label>
                    </div>
                </div>
                <button className={style.login_btn}>
                    Sign In
                </button>
                <span className={style.login_variants}>Or Sign In With</span>
                <div className={style.media_btns}>
                    <button onClick={(e) => { e.preventDefault() }}>
                        <FaFacebook />
                    </button>
                    <button onClick={(e) => { e.preventDefault() }}>
                        <FaGoogle />
                    </button>
                </div>
                <button onClick={(e) => { e.preventDefault() }} className={style.signup_btn}>
                    Sigh Up
                </button>
            </form>
            {error && <Alert text={error} />}
        </>
    )
}

export default LoginForm
