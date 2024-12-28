import React, { createContext, useState, useEffect } from 'react';
import API from '../utils/axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const { data } = await API.post('/auth/login', { email, password });
        localStorage.setItem('token', data.token);
        setUser(data.user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const { data } = await API.get('/auth/me'); // Assuming a `/me` endpoint
            setUser(data.user);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
