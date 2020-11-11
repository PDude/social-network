import React from 'react'
import { connect } from 'react-redux'

let mapStateToPropsForHide = state => ({
    isAuth: state.auth.isAuth
})

export const withAuthHide = (Component) => {
    class HideComponent extends React.Component {
        render() {
            return (this.props.isAuth ? <Component {...this.props} /> : null)
        }
    }

    let ConnectedAuthHideComponent = connect(mapStateToPropsForHide)(HideComponent)

    return ConnectedAuthHideComponent
}