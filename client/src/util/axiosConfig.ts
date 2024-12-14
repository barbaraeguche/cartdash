import axios from 'axios';

// use environment variable for flexibility
const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:5000';
// const backendUrl = 'http://127.0.0.1:5000';

export const apiClient = axios.create({
	baseURL: `${backendUrl}/grocery`,
	headers: { 'Content-Type': 'application/json' }
});