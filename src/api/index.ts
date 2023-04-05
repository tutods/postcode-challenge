import axios from 'axios';

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL
});

export const geocodeApi = axios.create({
	baseURL: import.meta.env.VITE_GEOCODING_API_URL
});
