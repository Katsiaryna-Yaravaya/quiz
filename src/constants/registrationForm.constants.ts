export const CREDENTIAL_FORM = [
    {
        title: "email",
        type: "email",
        name: "email",
        value: "email",
        autocomplete: "on",
        className: "login__email input",
        placeholder: "e-mail",
    },
    {
        type: "password",
        name: "pass",
        value: "pass",
        autocomplete: "current-pass",
        className: "login__password input",
        placeholder: "password",
    },
    {
        type: "submit",
        name: "signIn",
        value: "sign in",
        className: "login-buttons__signIn button",
    },
    {
        type: "submit",
        name: "signUp",
        value: "sign up",
        className: "login-buttons__signUp button",
    },
];

export const REGISTRATION_FORM = [
    {
        className: 'sign-up__user',
        errorClassName: 'sign-up__user-error',
        placeholder: 'Name',
        errorNotification: 'Required field for entering in Latin letters',
        fieldName: 'name',
        options: {
            required: true,
            pattern: /[A-Za-z]/
        },
    },
    {
        className: 'sign-up__user',
        errorClassName: 'sign-up__user-error',
        placeholder: 'Surname',
        errorNotification: 'Required field for entering in Latin letters',
        fieldName: 'surname',
        options: {
            required: true,
            pattern: /[A-Za-z]/
        },
    },
    {
        className: 'sign-up__user',
        errorClassName: 'sign-up__user-error',
        placeholder: 'Age',
        errorNotification: 'Required numeric field from 2 to 9',
        fieldName: 'age',
        options: {
            required: true,
            pattern: /\d?\d/,
            min: 2,
            max: 99,
            maxLength: 2,
        },
    },
    {
        className: 'sign-up__user',
        errorClassName: 'sign-up__user-error',
        placeholder: 'E-mail',
        errorNotification: 'Required field for entering e-mail',
        fieldName: 'email',
        autoComplete: "username",
        options: {
            required: true,
            pattern: /^\w+@\w+\.\w{2,}$/,
        },
    },
    {
        className: 'sign-up__user',
        errorClassName: 'sign-up__user-error',
        placeholder: 'Password',
        errorNotification: 'Required field for entering a password min 6 characters',
        fieldName: 'pass',
        autoComplete: "new-password",
        options: {
            required: true,
            minLength: 6,
        },
        type: "password"
    },
    {
        className: 'sign-up__user',
        errorClassName: 'sign-up__user-error',
        placeholder: 'Repeat password',
        errorNotification: 'Required field for entering a second password',
        fieldName: 'repeatPassword',
        autoComplete: "new-password",
        options: {
            required: true,
        },
        type: "password"
    },
];
