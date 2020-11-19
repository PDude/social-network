import React from 'react'
import './App.css'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter }from 'react-router-dom'
import store from './redux/reduxStore'
import { Provider } from 'react-redux'
// import ProfileContainer from './components/Profile/ProfileContainer'
// import DialogsContainer from './components/Dialogs/DialogsContainer'
// import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import NewsContainer from './components/News/NewsContainer'
import MusicContainer from './components/Music/MusicContainer'
import SettingsContainer from './components/Settings/SettingsContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import MainWrapStateContainer from './components/Login/MainWrapState/MainWrapStateContainer'
import LoginContainer from './components/Login/LoginContainer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { settingInitialization } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'
import { withSuspense } from './hoc/withSuspense'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {
  componentDidMount = () => {
    this.props.settingInitialization()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <MainWrapStateContainer>
        <HeaderContainer />
        <SidebarContainer />
        <div className='main_wrap_content'>

          <Switch>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
            <Route path='/users' render={withSuspense(UsersContainer)} />
            <Route path='/login/google' render={() => <div>Login through Google</div>} />
            <Route path='/login' render={() => <LoginContainer />} />
            <Route path='/news' render={() => <NewsContainer />} />
            <Route path='/music' render={() => <MusicContainer />} />
            <Route path='/settings' render={() => <SettingsContainer />} />
            <Redirect exact from='/' to='/profile' />
            <Route path='*' render={() => <NotFoundPage />} />
          </Switch>

        </div>
      </MainWrapStateContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { settingInitialization })
)(App)

const MainApp = (props) => {
  return (
    <HashRouter>
    {/* <BrowserRouter> */}
      <Provider store={store}>
        <AppContainer />
      </Provider>
      </HashRouter>
    // </BrowserRouter>
  )
}

export default MainApp