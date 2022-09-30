import {BASE_URL, JWT_LS_KEY} from "./constants.js";

const headers = () => ({
    'Authorization': `Bearer ${localStorage.getItem(JWT_LS_KEY)}`,
    'Content-Type': 'application/json'
})

export function responseCheck(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

export const register = ({email, password, name}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, name})
    }).then(responseCheck);
};

export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(responseCheck);
};

//получаем информацию о пользователе
export const getData = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(responseCheck);
}

//обновляем информацию о пользователе
export const updateData = ({name, email}) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: headers(),
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(responseCheck);
}

//загружаем сохраненные фильмы с сервера
export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: headers(),
    })
        .then(responseCheck)
}

//сохраняем фильм
export const postMovie = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(movie)
    })
        .then(responseCheck)
}

//удалаяем фильм из избранного
export const removeMovie = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        headers: headers()
    })
        .then(responseCheck)
}