export const BASE_URL = 'https://api.ulitina.movies.nomorepartiesxyz.ru';

function responseCheck(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

export const register = (userData) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(responseCheck);
};

export const authorize = (userData) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(responseCheck);
};
//
// export const getData = (token) => {
//     return fetch(`${BASE_URL}/users/me`, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//         }
//     })
//         .then(responseCheck);
// }