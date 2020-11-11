import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuth/withAuthRedirect'
import News from './News'

class NewsContainer extends React.Component {
    render() {
        return <News />
    }
}

let mapStateToProps = (state) => ({})

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(NewsContainer)