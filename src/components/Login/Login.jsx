import React from 'react'
import style from './Login.module.css'
import Container from '../common/Container/Container'
import LoginForm from './LoginForm'
import { reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginSession(formData.email, formData.password, formData.remember_me, formData.captcha)
    }

    return (
        <>
            {props.isAuth
                ? <Redirect to={'/profile'} />
                : <div className={style.bg_rotation}>
                    <Container>
                        <section className={style.login_wrap}>
                            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
                        </section>
                    </Container>
                </div>
            }
        </>
    )
}

export default Login
