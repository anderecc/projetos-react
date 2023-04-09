import {
    createUserWithEmailAndPassword,
    deleteUser,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth, db } from '../../services/firebaseConfig';
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from 'firebase/storage';

const storage = getStorage();

export let setUserAuth = (user) => {
    return async (dispatch, getState) => {
        let state = getState();
        if (state.user.register) {
            await dispatch({ type: 'SET_USER_UID', payload: user.uid });
            await dispatch(getUsersDB());
        } else {
            await dispatch({ type: 'SET_USER_UID', payload: user.uid });
            await dispatch(getUsersDB());
            await dispatch(getUserDB(user.uid));
            dispatch(setLoading(false));
        }
    };
};

export let login = (email, password) => {
    return (dispatch, getState) => {
        dispatch(setLoading(true));

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                await dispatch(getUserDB(user.uid));
                await dispatch(getUsersDB());
                await dispatch({ type: 'SET_USER_UID', payload: user.uid });

                dispatch(setLoading(false));
            })
            .catch(() => {
                let user = getState();

                dispatch(setLoading(false));

                dispatch(
                    setError({
                        login: {
                            ...user.user.errors.login,
                            db: 'E-mail ou senha está incorreto.',
                        },
                    })
                );
            });
    };
};

export let register = (data) => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        dispatch({ type: 'REGISTER', payload: true });

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                await dispatch(setUserDB(user.uid, data));

                await dispatch({ type: 'SET_USER_UID', payload: user.uid });
                // ...
            })
            .catch((error) => {
                let user = getState();

                dispatch(setLoading(false));

                dispatch(
                    setError({
                        register: {
                            ...user.user.errors.register,
                            db: error.message,
                        },
                    })
                );
            });
    };
};

export let setUserDB = (uid, data) => {
    return async (dispatch) => {
        dispatch(setLoading(true));

        const storageRef = await ref(storage, `users/${uid}/${uid}-image.jpeg`);

        await setDoc(doc(collection(db, 'users'), uid), data);

        let blob = await fetch('./images/profile.png').then((res) =>
            res.blob()
        );
        await uploadBytes(storageRef, blob).then(async () => {
            await dispatch(getUserDB(uid));
            dispatch({ type: 'REGISTER', payload: false });
        });
        dispatch(setLoading(false));
    };
};

export let logOut = () => {
    return (dispatch) => {
        signOut(auth)
            .then(async () => {
                await dispatch({ type: 'SET_USER_UID', payload: '' });
                return window.location.reload(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export let getUserDB = (uid) => {
    return async (dispatch) => {
        dispatch(setLoading(true));

        let userData = await getDoc(doc(db, 'users', uid));

        let user = userData ? userData.data() : {};

        await getDownloadURL(ref(storage, `users/${uid}/${uid}-image.jpeg`))
            .then((res) => {
                user = { ...user, image: res };
                dispatch({ type: 'SET_USER_INFOS', payload: user });
                dispatch(setLoading(false));
            })
            .catch(() => {
                dispatch(setLoading(false));
                console.log('error');
            });
    };
};

export let getUsersDB = () => {
    return async (dispatch) => {
        let data = await getDocs(collection(db, 'users'));

        let users = [];

        data.forEach((user) => (users = [...users, user.data()]));

        users = users.sort((a, b) => a.id - b.id);

        dispatch({ type: 'SET_USERS', payload: users });
    };
};

export let updateUserDB = (uid, fileImage, data) => {
    return async (dispatch) => {
        dispatch(setLoading(true));

        if (fileImage) {
            const storageRef = ref(storage, `users/${uid}/${uid}-image.jpeg`);

            await updateDoc(doc(db, 'users', uid), data);

            await uploadBytes(storageRef, fileImage).then(() => {
                dispatch(getUserDB(uid));
                dispatch(getUsersDB());
            });
            dispatch(setLoading(false));
        } else {
            await updateDoc(doc(db, 'users', uid), data);

            dispatch(getUserDB(uid));
            dispatch(getUsersDB());

            dispatch(setLoading(false));
        }
    };
};

export let deleteUserDB = (uid) => {
    return async (dispatch) => {
        dispatch(setLoading(true));

        await deleteDoc(doc(db, 'users', uid));

        await deleteObject(ref(storage, `users/${uid}/${uid}-image.jpeg`));

        const user = auth.currentUser;
        deleteUser(user)
            .then(() => {
                dispatch(setLoading(false));

                dispatch({ type: 'SET_USER_UID', payload: '' });

                return window.location.reload(false);
            })
            .catch((error) => {
                dispatch(setLoading(false));
                console.log(error);
            });
    };
};

export let setLoading = (value) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOADING', payload: value });
    };
};

export let setError = (value) => {
    return (dispatch) => {
        dispatch({ type: 'SET_ERROR', payload: value });
    };
};
