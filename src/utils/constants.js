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
const SUCCESS_UPDATE_MSG = 'Данные успешно обновлены!'
const MOVIES_ERR_MSG = 'Во время запроса произошла ошибка. ' +
    'Возможно, проблема с соединением или сервер недоступен. ' +
    'Подождите немного и попробуйте ещё раз';
const MOVIES_NOT_FOUND = 'Ничего не найдено';
const SEARCH_TEXT_ERR = 'Нужно ввести ключевое слово';

const MOVIES_LS_KEY = "movies"

const SHORT_MOVIE_DURATION = 40;

const MOVIES_GRID = {
  desk: {
    init: 12,
    add: 4,
  },
  intermediate: {
    init: 9,
    add: 3,
    maxWidth: 1279,
  },
  tab: {
    init: 8,
    add: 2,
    maxWidth: 1023,
  },
  mobile: {
    init: 5,
    add: 2,
    maxWidth: 767,
  },
}

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
  SUCCESS_UPDATE_MSG,
  MOVIES_ERR_MSG,
  MOVIES_NOT_FOUND,
  SEARCH_TEXT_ERR,

  MOVIES_LS_KEY,

  MOVIES_GRID,
  SHORT_MOVIE_DURATION,
};
