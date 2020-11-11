import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuth/withAuthRedirect'
import Settings from './Settings'

class SettingsContainer extends React.Component {
    render() {
        return <Settings />
    }
}

let mapStateToProps = (state) => ({})

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(SettingsContainer)