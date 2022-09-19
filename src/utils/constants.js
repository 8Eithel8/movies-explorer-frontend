export const BAD_REQ_ERR_CODE = 400;
export const UNAUTH_ERR_CODE = 401;
export const FORBIDDEN_ERR_CODE = 403;
export const NOT_FOUND_ERR_CODE = 404;
export const CONFLICT_ERR_CODE = 409;
export const SERVER_ERR_CODE = 500;

export const SERVER_ERR_MSG = 'Что-то пошло не так! Попробуйте ещё раз.';
export const FIELDS_ERR_MSG = 'Некорректное значение одного или нескольких полей';
export const LOGIN_ERR_MSG = 'Неверный логин или пароль.';
export const USER_EXISTS_ERR_MSG = 'Пользователь с таким логином уже зарегистрирован.';
export const SUCCESS_UPDATE_MSG = 'Данные успешно обновлены!'
export const MOVIES_ERR_MSG = 'Во время запроса произошла ошибка. ' +
    'Возможно, проблема с соединением или сервер недоступен. ' +
    'Подождите немного и попробуйте ещё раз';
export const MOVIES_NOT_FOUND = 'Ничего не найдено';
export const SEARCH_TEXT_ERR = 'Нужно ввести ключевое слово';

export const SEARCH_PARAMS_LS_KEY = 'searchParams'
export const JWT_LS_KEY = 'jwt'

export const SHORT_MOVIE_DURATION = 40;

export const MOVIES_GRID = {
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