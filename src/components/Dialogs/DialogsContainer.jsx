import React from 'react'
import { addMessage } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import Dialogs from '../Dialogs/Dialogs'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuth/withAuthRedirect'

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData
})

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(DialogsContainer)