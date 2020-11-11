import React from 'react'
import Friends from './Friends'
import { connect } from 'react-redux'
import { compose } from 'redux'

class FriendsContainer extends React.Component {
    render() {
        return <Friends {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebar.friendsData
    }
}

export default compose(
    connect(mapStateToProps, {})
)(FriendsContainer) 