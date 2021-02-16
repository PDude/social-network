import React from 'react'
import style from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
  statusPlug = `I'm Social Network Part`

  state = {
    editMode: false,
    status: this.props.status,
  }

  handleFocus = (event) => event.target.select()

  editModeOn = () => {
    this.setState({
      editMode: true,
    })
  }

  editModeOff = () => {
    this.setState({
      editMode: false,
    })

    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  render() {
    return (
      <div className={style.status_section}>
        {this.state.editMode ? (
          <input
            autoFocus
            onChange={this.onStatusChange}
            onFocus={this.handleFocus}
            onBlur={this.editModeOff}
            value={this.state.status}
            className={style.status_input}
          />
        ) : (
          <p onDoubleClick={this.editModeOn} className={style.status_text}>
            {this.props.status || this.statusPlug}
          </p>
        )}
      </div>
    )
  }
}

export default ProfileStatus
