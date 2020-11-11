import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import style from './Dialogs.module.css'
import Container from '../common/Container/Container'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormElements/FormElements'
import { maxLengthCreator, requiredFiled } from '../../utils/validators/validators'

const maxLength500 = maxLengthCreator(500)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form_message}>
            <div className={style.message_form_textarea}>
                <Field name={'message'} placeholder='Send message ..' component={Textarea}
                    validate={[requiredFiled, maxLength500]} />
            </div>
            <button>
                Send! ✈
            </button>
        </form>
    )
}

const MessageReduxForm = reduxForm({ form: 'dialogMessageForm' })(MessageForm)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} imgPath={dialog.imgPath} />)
    let messagesElements = props.messagesData.map(message => <Message id={message.id} key={message.id} text={message.text} />)

    const onAddMessage = (values) => {
        props.addMessage(values.message)
    }

    return (
        <Container>
            <div className={style.dialogs_content}>
                <div className={style.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={style.messages_content}>
                    {messagesElements}
                    <MessageReduxForm onSubmit={onAddMessage} />
                </div>
            </div>
        </Container>
    )
}

export default Dialogs