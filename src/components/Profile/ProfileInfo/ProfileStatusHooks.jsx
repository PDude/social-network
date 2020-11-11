import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './ProfileInfo.module.css'

const ProfileStatusHooks = (props) => {
    let statusPlug = `I'm Social Network Part`
    let handleFocus = (event) => event.target.select()

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOf = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={style.status_section}>
            {editMode
                ? <input autoFocus onFocus={handleFocus} onChange={onStatusChange} value={status} onBlur={editModeOf} className={style.status_input} />
                : <p onDoubleClick={editModeOn} className={style.status_text}>{props.status || statusPlug}</p>}
        </div>
    )
}

export default ProfileStatusHooks