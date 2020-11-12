import React from 'react'
import Profile from './Profile'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    // refreshProfile() {
    //     let userId =+ this.props.match.params.userId
    //     if (!userId) {
    //         userId = this.props.authorizedUserId;
    //         if (!userId) {
    //             this.props.history.push('/login')
    //         }
    //     }

    //     if (!userId) {
    //         console.error("ID should exists in URI params or in state ('authorizedUserId')")
    //     } else {
    //         this.props.getUserProfile(userId)
    //         this.props.getStatus(userId)
    //     }
    // }

    // componentDidMount() {
    //     this.refreshProfile()
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.match.params.userId != prevProps.match.params.userId) {
    //         this.refreshProfile()
    //     }
    // }

    settingProfileCondition = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount = () => {
        this.settingProfileCondition()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.settingProfileCondition()
        }
    }

    render() {
        // return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer)