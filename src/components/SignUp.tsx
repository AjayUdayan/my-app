import React, { useState, FormEvent } from 'react';
import { AuthService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
interface LoginData {
    username: string;
    password: string;
}

const SignUp: React.FC = () => {
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

    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { username, password } = loginData;
            const token = await AuthService.register(username, password);
            // console.log(token);

            if (token) {
                navigate('/login');
            }
        } catch (error) {
            toast.error('Login failed:');
        }
    };
    return (
        <div className="login-form">
            <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSignUp}>
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
                        Sign Up
                    </button>
                    {/* <button
                        onClick={() => navigate('/login')}
                        className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Login
                    </button> */}
                    <p className='text-xs'>Or</p>
                    <div className='cursor-pointer' onClick={() => navigate('/login')}>
                        <p className='text-base text-blue-500'>Already have an account</p>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default SignUp;