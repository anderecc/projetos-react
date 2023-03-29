import { createContext, useEffect, useReducer, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useDeleteUser,
    useSignInWithEmailAndPassword,
    useSignOut,
} from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';

import reducer, { initialState } from '../store/reducers';
import {
    setError,
    setLoading,
    setRedirect,
    setUserInfos,
    setUsers,
} from '../store/actions';
import getUserDB from '../functions/getUserDB';
import getUsersDB from '../functions/getUsersDB';
import setUserDB from '../functions/setUserDB';
import updateImageUserDB from '../functions/updateImageUserDB';
import updateUserDB from '../functions/updateUserDB';
import deleteUserDB from '../functions/deleteUserDB';
import deleteImageUserDB from '../functions/deleteImageUserDB';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    let [dataUser, setDataUser] = useState({});
    let [cookies, setCookie, removeCookie] = useCookies(['uid']);

    //login and register user
    let [signInWithEmailAndPassword, userLogin, loadingLogin, errorLogin] =
        useSignInWithEmailAndPassword(auth);
    let [signOut] = useSignOut(auth);
    const [
        createUserWithEmailAndPassword,
        userRegister,
        loadingRegister,
        errorRegister,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [user, _, errorAuthState] = useAuthState(auth);

    // delet user
    const [deleteUser, loadingDelet, errorDelet] = useDeleteUser(auth);

    useEffect(() => {
        document.title = 'Coooder Users';
        document.documentElement.lang = 'pt-br';
        if (user) {
            handleSetUsers();
            setCookie('uid', user.uid);
            if (user && userLogin) {
                handleSetUser(userLogin.user.uid);
            } else if (user && userRegister) {
                handleRegisterUser(userRegister.user.uid);
            } else {
                handleSetUser(user.uid);
            }
        }
        if (errorLogin)
            handleSetError({ login: 'Usuário ou senha está incorreto.' });

        if (errorRegister)
            handleSetError({
                register: {
                    ...state.errors.register,
                    db: errorRegister.message,
                },
            });
    }, [user, errorLogin, errorRegister]);

    let handleSignIn = async (email, password) => {
        handleSetLoading(true);
        await signInWithEmailAndPassword(email, password);
        return handleSetLoading(false);
    };

    let handleRegister = async (password, data) => {
        handleSetLoading(true);
        setDataUser({ ...data });
        await createUserWithEmailAndPassword(data.email, password);
        return handleSetLoading(false);
    };

    let handleRegisterUser = async (uid) => {
        handleSetLoading(true);
        await setUserDB(dataUser, uid);
        await handleSetUser(uid);
        await handleSetUsers();
        return handleSetLoading(false);
    };

    let handleSignOut = async () => {
        handleSetRedirect(true);
        dispatch(setUserInfos({}));
        removeCookie('uid');
        await signOut();
        return window.location.reload(false);
    };

    let handleDeleteUser = async () => {
        handleSetRedirect(true);
        handleSetLoading(true);
        await deleteUserDB(user.uid);
        await deleteImageUserDB(user.uid);
        await deleteUser();
        dispatch(setUserInfos({}));
        removeCookie('uid');
        handleSetLoading(false);
        return window.location.reload(false);
    };

    let handleSetLoading = (value) => {
        return dispatch(setLoading(value));
    };

    let handleSetUsers = async () => {
        handleSetLoading(true);
        let users = await getUsersDB();
        dispatch(setUsers(users));
        return handleSetLoading(false);
    };

    let handleSetUser = async (uid) => {
        handleSetLoading(true);
        let userLogged = await getUserDB(uid, handleSetLoading);
        dispatch(setUserInfos(userLogged));
        return handleSetLoading(false);
    };

    let handleUpdateUser = async (fileImage, data) => {
        handleSetLoading(true);
        if (fileImage) await updateImageUserDB(user.uid, fileImage);
        if (data) await updateUserDB(user.uid, data);
        await handleSetUser(user.uid);
        await handleSetUsers();
        return handleSetLoading(false);
    };

    let handleSetError = (value) => {
        return dispatch(setError(value));
    };

    let handleSetRedirect = (value) => {
        return dispatch(setRedirect(value));
    };

    return (
        <AppContext.Provider
            value={{
                user,
                state,
                cookies,
                handleSignIn,
                handleRegister,
                handleSignOut,
                handleSetLoading,
                handleUpdateUser,
                handleSetError,
                handleDeleteUser,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
