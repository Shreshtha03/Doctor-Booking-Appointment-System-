import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
});

// Mock Auth Interceptor if needed later
// api.interceptors.request.use((config) => { ... })

export default api;
