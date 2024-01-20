import axios from 'axios';

export const api = new axios.create({
    baseURL: 'https://localhost:7030/',
});