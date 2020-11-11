export const requiredFiled = value => {
    return value ? undefined : 'Field is required'
}

export const maxLengthCreator = (length) => (value) => {
    return value.length > length ? `Max length is ${length} symbols` : undefined
}