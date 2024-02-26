import axios from 'axios';
import { toast } from 'react-toastify';
const BASE_URL = 'https://reqres.in/api';

export const AuthService = {
    async login(email: string, password: string) {
        try {
            const response = await axios.post(`${BASE_URL}/login`, { email, password });
            localStorage.setItem('token', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            toast.error('An error occurred during login.');
        }
    },

    async register(email: string, password: string) {

        try {
            const response = await axios.post(`${BASE_URL}/register`, { email, password });
            return response.data;
        } catch (error: any) {
            toast.error(error?.response?.data?.error);

        }
    }
};