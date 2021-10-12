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

export const REGISTRATION_FORM = [{
  className: 'sign-up__user',
  errorClassName: 'sign-up__user-error',
  errorNotification: 'Обязательное поле для ввода латинскими буквами',
  fieldName: 'name',
  options: {
    required: true,
    pattern: /[A-Za-z]/
  },
},
  {
    className: 'sign-up__user',
    errorClassName: 'sign-up__user-error',
    errorNotification: 'Обязательное поле для ввода латинскими буквами',
    fieldName: 'surName',
    options: {
      required: true,
      pattern: /[A-Za-z]/
    },
  },
  {
    className: 'sign-up__user',
    errorClassName: 'sign-up__user-error',
    errorNotification: 'Обязательное числовое поле от 2 до 9',
    fieldName: 'age',
    options: {
      required: true,
      pattern: /\d?\d/,
      min: 2,
      max: 99
    },
  },
  {
    className: 'sign-up__user',
    errorClassName: 'sign-up__user-error',
    errorNotification: 'Обязательное поле для ввода e-mail',
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
    errorNotification: 'Обязательное поле для ввода пароля мин 6 симмволов',
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
    errorNotification: 'Обязательное поле для ввода повторного пароля',
    fieldName: 'repeatPassword',
    autoComplete: "new-password",
    options: {
      required: true,
    },
    type: "password"
  },
];
