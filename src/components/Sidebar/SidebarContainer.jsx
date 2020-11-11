import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthHide } from '../../hoc/WithAuth/withAuthHide'
import Sidebar from './Sidebar'

class SidebarContainer extends React.Component {   
    render() {
        return <Sidebar {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {}),
    withAuthHide
)(SidebarContainer) 