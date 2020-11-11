import React from 'react'
import { connect } from 'react-redux'

let mapStateToPropsPassingAuthState = state => ({
    isAuth: state.auth.isAuth
})

export const withAuthPassState = (Component) => {
    class PassAuthState extends React.Component {
        render() {
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthPassState = connect(mapStateToPropsPassingAuthState)(PassAuthState)

    return ConnectedAuthPassState
}