import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect } from 'react';
import { auth } from '../services/firebaseConfig';
import { useDispatch } from 'react-redux';
import { setLoading, setUserAuth } from '../store/actions/userActions';

let AuthContext = createContext();

let AuthProvider = ({ children }) => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    await dispatch(setUserAuth(user));
                } catch (error) {
                    console.log(error);
                }
            } else {
                dispatch(setLoading(false));
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{ undefined }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
