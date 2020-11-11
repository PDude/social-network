import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuth/withAuthRedirect'
import Music from './Music'

class MusicContainer extends React.Component {
    render() {
        return <Music />
    }
}

let mapStateToProps = (state) => ({})

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(MusicContainer)