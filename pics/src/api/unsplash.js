import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8f6d404f6ebf8b818f2fa51be0872df0acd03d12c828c598fe1d8398e0a9ab5f'
    },
})
