import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import User from '../pages/User';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './privateRoute';
import Users from '../pages/Users';

export let AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/register'} element={<Register />} />
                <Route
                    path={'/users'}
                    element={
                        <PrivateRoute>
                            <Users />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/user"
                    element={
                        <PrivateRoute>
                            <User />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
};
