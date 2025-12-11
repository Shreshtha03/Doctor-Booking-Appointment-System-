import axios from 'axios';

// HARDCODED URL to ensure it works on Vercel
const baseUrl = 'https://doctor-booking-appointment-system-xro5.onrender.com/api';
console.log("🔌 Connecting to Backend at:", baseUrl);

const api = axios.create({
    baseURL: baseUrl,
});

// Mock Auth Interceptor if needed later
// api.interceptors.request.use((config) => { ... })

export default api;
