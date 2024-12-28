import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import NotToDoPage from './pages/NotToDoPage';
import HRAdminLogin from './pages/HRAdminLogin';
import HRAdminRegister from './pages/HRAdminReg';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HRAdminRegister/>} />
                    <Route path="/Login" element={<HRAdminLogin />} />
                    <Route path="/login/Create" element={<NotToDoPage />} /> 
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
