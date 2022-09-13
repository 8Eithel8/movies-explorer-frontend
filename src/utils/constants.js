const BAD_REQ_ERR_CODE = 400;
const UNAUTH_ERR_CODE = 401;
const FORBIDDEN_ERR_CODE = 403;
const NOT_FOUND_ERR_CODE = 404;
const CONFLICT_ERR_CODE = 409;
const SERVER_ERR_CODE = 500;

const SERVER_ERR_MSG = 'Что-то пошло не так! Попробуйте ещё раз.';
const FIELDS_ERR_MSG = 'Некорректное значение одного или нескольких полей';
const LOGIN_ERR_MSG = 'Неверный логин или пароль.';
const USER_EXISTS_ERR_MSG = 'Пользователь с таким логином уже зарегистрирован.';

module.exports = {
  BAD_REQ_ERR_CODE,
  UNAUTH_ERR_CODE,
  FORBIDDEN_ERR_CODE,
  NOT_FOUND_ERR_CODE,
  CONFLICT_ERR_CODE,
  SERVER_ERR_CODE,

  SERVER_ERR_MSG,
  FIELDS_ERR_MSG,
  LOGIN_ERR_MSG,
  USER_EXISTS_ERR_MSG,
};
