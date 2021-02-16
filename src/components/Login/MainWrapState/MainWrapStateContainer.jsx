import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthPassState } from '../../../hoc/WithAuth/withAuthPassState'
import MainWrapState from './MainWrapState'

class MainWrapStateContainer extends React.Component {
  render() {
    return <MainWrapState {...this.props}>{this.props.children}</MainWrapState>
  }
}

let mapStateToProps = (state) => ({})

export default compose(
  connect(mapStateToProps, {}),
  withAuthPassState
)(MainWrapStateContainer)
