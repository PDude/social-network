import React from 'react'

import style from './FormElements.module.css'

export const FormElement = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div title={hasError ? error : undefined} className={hasError ? `${style.form_element} ${style.error}` : style.form_element}>
            {children}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, element, ...restProps } = props
    return <FormElement {...props}><textarea {...input} {...restProps} /></FormElement>
}

export const Input = (props) => {
    const { input, meta, child, element, ...restProps } = props
    return <FormElement {...props}><input {...input} {...restProps} /></FormElement>
} 