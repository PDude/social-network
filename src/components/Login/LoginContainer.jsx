import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { loginSession, logoutSession } from '../../redux/authReducer'
import Login from './Login'

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default compose(
    connect(mapStateToProps, { loginSession, logoutSession })
)(LoginContainer)
