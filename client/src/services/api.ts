import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // TODO: environment variable
});

// Mock Auth Interceptor if needed later
// api.interceptors.request.use((config) => { ... })

export default api;
