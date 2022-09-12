import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function postSignIn(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

function getTransactions(token) {
    const promise = axios.get(`${BASE_URL}/transactions`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    });
    return promise;
}

function postTransactions(body, token) {
    const promise = axios.post(`${BASE_URL}/transactions`, body, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return promise;
}

export {
    postSignUp,
    postSignIn,
    getTransactions,
    postTransactions
}