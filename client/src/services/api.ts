import axios from 'axios';

// Reverted to Localhost for development/fixing
const baseUrl = 'http://localhost:3000/api';
console.log("🔌 Connecting to Backend at:", baseUrl);

const api = axios.create({
    baseURL: baseUrl,
});

// Mock Auth Interceptor if needed later
// api.interceptors.request.use((config) => { ... })

export default api;
