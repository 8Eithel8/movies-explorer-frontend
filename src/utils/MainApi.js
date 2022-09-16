export const BASE_URL = 'https://api.ulitina.movies.nomorepartiesxyz.ru';

const headers = () => ({
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
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
