import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthHide } from '../../hoc/WithAuth/withAuthHide'
import Sidebar from './Sidebar'
import { getUserProfile } from '../../redux/profileReducer'

class SidebarContainer extends React.Component {
  componentDidMount = () => {
    this.props.getUserProfile(this.props.authorizedUserId)
  }

  render() {
    return <Sidebar {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  profile: state.profilePage.profile,
  authorizedUserId: state.auth.userId
})

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthHide
)(SidebarContainer)
