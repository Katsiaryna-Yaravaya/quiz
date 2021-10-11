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
    type: "text",
    name: "name",
    value: "name",
    className: "sign-up__user",
    placeholder: "name",
  },
  {
    type: "text",
    name: "surname",
    value: "surname",
    className: "sign-up__user",
    placeholder: "surname",
  },
  {
    type: "number",
    name: "age",
    value: "age",
    className: "sign-up__user",
    placeholder: "age",
  },
  {
    type: "email",
    name: "email",
    value: "email",
    className: "sign-up__user",
    placeholder: "email",
    autocomplete: "username",
  },
  {
    type: "password",
    name: "pass",
    value: "pass",
    className: "sign-up__user",
    placeholder: "password",
    autocomplete: "new-pass",
  },
  {
    type: "password",
    name: "newPassword",
    value: "newPassword",
    className: "sign-up__user",
    placeholder: "repeat pass",
    autocomplete: "new-pass",
  },
];

export const REGISTRATION_BUTTONS_FORM = [
  {
    type: "submit",
    value: "back",
    className: "form__sign-up-button",
  },
  {
    type: "submit",
    value: "register",
    className: "form__sign-up-button",
  },
];
