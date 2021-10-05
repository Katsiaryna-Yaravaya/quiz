export const isEmailValid = ({ email }) => {
    const regex = /^\w+@\w+\.\w{2,}$/
    return regex.test(email)
}

export const isNotRequestValid = statusText => statusText !== 'OK'