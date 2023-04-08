import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

let PrivateRoute = ({ children }) => {
    let user = useSelector((state) => state.user);
    return user.user_uid !== '' ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
