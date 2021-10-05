export const REGISTRATION_FORM = [
    {
        title: 'email',
        type: 'email',
        name: 'email',
        value: 'email',
        autocomplete: 'on',
        className: 'login__email input',
        placeholder: 'e-mail'

    },
    {
        type: 'password',
        name: 'password',
        value: 'password',
        autocomplete: 'current-password',
        className: 'login__password input',
        placeholder: 'password'
    },
    {
        type: 'submit',
        name: 'signIn',
        value: 'sign in',
        className: 'login-buttons__signIn button'
    },
    {
        type: 'submit',
        name: 'signUp',
        value: 'sign up',
        className: 'login-buttons__signUp button'
    }
]