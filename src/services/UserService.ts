import axios from 'axios';

const BASE_URL = 'https://reqres.in/api'; // or your API base URL

export const UserService = {
    async getUser(id: number) {
        try {
            const response = await axios.get(`${BASE_URL}/users`);
            return response.data.data;
        } catch (error) {
            throw new Error('An error occurred while fetching user data.');
        }
    }
};