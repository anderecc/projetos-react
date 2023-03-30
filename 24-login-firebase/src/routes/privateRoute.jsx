import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context';

let PrivateRoute = ({ children }) => {
    let { cookies, user } = useContext(AppContext);

    return cookies.uid || user ? children : <Navigate to={'/'} />;
};

export default PrivateRoute;
