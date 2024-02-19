import React, { useState, FormEvent } from 'react';
import { AuthService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


interface LoginData {
    username: string;
    password: string;
}

const Login = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,
        });
    };

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { username, password } = loginData;
            const token = await AuthService.login(username, password);
            // console.log(token);

            if (token) {
                navigate('/dashboard');
            }
        } catch (error) {
            toast.error('Login failed:');
        }
    };
    return (
        <div className="login-form">
            <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-field">
                    <label htmlFor="username" className="block mb-2 text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password" className="block mb-2 text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Login
                    </button>

                    <p className='text-xs'>Or</p>
                    <div className='cursor-pointer' onClick={() => navigate('/signup')}>
                        <p className='text-base text-blue-500'>Create New Account</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;